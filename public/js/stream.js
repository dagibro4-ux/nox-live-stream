// =====================================
// Kick Clone - stream.js
// Stream Controller
// =====================================


document.addEventListener("DOMContentLoaded",()=>{


    const viewerCount = document.getElementById("viewer-count");

    let viewers = 325;


    if(viewerCount){


        setInterval(()=>{


            const change = Math.floor(Math.random()*10)-4;


            viewers += change;


            if(viewers < 0){

                viewers = 0;

            }


            viewerCount.innerHTML = viewers;


        },3000);


    }



    const streamer =
    document.getElementById("streamerName");


    const user =
    JSON.parse(localStorage.getItem("user"));



    if(user && streamer){

        streamer.innerHTML = user.username;

    }



});
