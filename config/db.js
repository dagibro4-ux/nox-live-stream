// =====================================
// MySQL Database Connection
// =====================================

const mysql = require("mysql2");


const db = mysql.createPool({

    host: "localhost",

    user: "root",

    password: "",

    database: "kick_clone",

    waitForConnections: true,

    connectionLimit: 10,

    queueLimit: 0

});


// Test Connection

db.getConnection((err, connection)=>{

    if(err){

        console.log("Database connection failed:", err.message);

        return;

    }


    console.log("MySQL Database Connected");


    connection.release();

});


module.exports = db;
