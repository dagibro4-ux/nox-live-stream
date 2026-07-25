// =====================================
// Kick Clone - auth.js
// Login & Register
// =====================================


// REGISTER

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", async(e)=>{

e.preventDefault();


const data = {

username: document.getElementById("username").value,

email: document.getElementById("email").value,

password: document.getElementById("password").value,

role: document.getElementById("role").value

};



const response = await fetch("/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});


const result = await response.json();


alert(result.message);


if(response.ok){

window.location.href="login.html";

}


});

}




// LOGIN

const loginForm = document.getElementById("loginForm");


if(loginForm){


loginForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const data={

email:document.getElementById("email").value,

password:document.getElementById("password").value

};



const response = await fetch("/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});



const result = await response.json();



if(response.ok){


localStorage.setItem(
"token",
result.token
);


localStorage.setItem(
"user",
JSON.stringify(result.user)
);



alert("Login successful");


window.location.href="dashboard.html";


}else{


alert(result.message);


}


});


}
