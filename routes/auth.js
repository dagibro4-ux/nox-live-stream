// =====================================
// Authentication Routes
// =====================================

const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../config/db");


const JWT_SECRET = "kick_clone_secret_key";


// =====================
// REGISTER
// =====================

router.post("/register", async (req,res)=>{


    const {
        username,
        email,
        password,
        role
    } = req.body;



    if(!username || !email || !password){

        return res.status(400).json({
            message:"Please fill all fields"
        });

    }



    try{


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );



        const sql = `
        INSERT INTO users
        (username,email,password,role)

        VALUES (?,?,?,?)
        `;



        db.query(
            sql,
            [
                username,
                email,
                hashedPassword,
                role || "viewer"
            ],

            (err,result)=>{


                if(err){

                    return res.status(500).json({
                        message:"Email already exists"
                    });

                }



                res.json({

                    message:"Account created successfully"

                });


            }
        );


    }catch(error){


        res.status(500).json({
            message:"Server error"
        });


    }


});




// =====================
// LOGIN
// =====================


router.post("/login",(req,res)=>{


    const {
        email,
        password
    } = req.body;



    db.query(

        "SELECT * FROM users WHERE email=?",

        [email],


        async(err,result)=>{


            if(err || result.length===0){

                return res.status(401).json({
                    message:"User not found"
                });

            }



            const user=result[0];



            const match =
            await bcrypt.compare(
                password,
                user.password
            );



            if(!match){

                return res.status(401).json({
                    message:"Wrong password"
                });

            }




            const token = jwt.sign(

                {
                    id:user.id,
                    role:user.role
                },

                JWT_SECRET,

                {
                    expiresIn:"7d"
                }

            );



            res.json({

                message:"Login successful",

                token,

                user:{
                    id:user.id,
                    username:user.username,
                    role:user.role
                }

            });


        }


    );


});



module.exports = router;
