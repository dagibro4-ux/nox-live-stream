// ======================================
// Kick Clone - app.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Kick Clone Loaded");

    showNotification("Welcome to Kick Clone!");

    liveClock();

});

// ----------------------------
// Notification
// ----------------------------

function showNotification(message){

    const old = document.querySelector(".notification");

    if(old){
        old.remove();
    }

    const notification = document.createElement("div");

    notification.className = "notification";

    notification.innerHTML = message;

    document.body.appendChild(notification);

    setTimeout(()=>{

        notification.remove();

    },3000);

}

// ----------------------------
// Search
// ----------------------------

const searchInput = document.querySelector("#search");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ----------------------------
// Buttons
// ----------------------------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.96)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},100);

});

});

// ----------------------------
// Live Clock
// ----------------------------

function liveClock(){

const clock=document.getElementById("clock");

if(!clock) return;

setInterval(()=>{

const now=new Date();

clock.innerHTML=now.toLocaleTimeString();

},1000);

}

// ----------------------------
// Fake Viewer Counter
// ----------------------------

const viewer=document.getElementById("viewer-count");

if(viewer){

let count=325;

setInterval(()=>{

count += Math.floor(Math.random()*5)-2;

if(count<300) count=300;

viewer.innerHTML=count;

},3000);

}

// ----------------------------
// Theme
// ----------------------------

const theme=document.getElementById("theme-toggle");

if(theme){

theme.onclick=function(){

document.body.classList.toggle("light");

}

}

// ----------------------------
// Chat UI
// ----------------------------

const sendBtn=document.getElementById("send-message");

if(sendBtn){

sendBtn.onclick=function(){

const input=document.getElementById("message");

const messages=document.getElementById("messages");

if(input.value.trim()=="") return;

const div=document.createElement("div");

div.className="message";

div.innerHTML="<strong>You</strong><p>"+input.value+"</p>";

messages.appendChild(div);

messages.scrollTop=messages.scrollHeight;

input.value="";

}

}

// ----------------------------
// Smooth Scroll
// ----------------------------

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href && href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("Kick Clone Ready");
