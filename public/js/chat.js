// =====================================
// Kick Clone - chat.js
// Live Chat
// =====================================


const sendButton = document.getElementById("send-message");
const messageInput = document.getElementById("message");
const messagesBox = document.getElementById("messages");


// Send Message

if(sendButton){

sendButton.addEventListener("click", sendMessage);

}


// Enter key send

if(messageInput){

messageInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});

}



// Create Message

function sendMessage(){


    const text = messageInput.value.trim();


    if(text === ""){

        return;

    }



    addMessage(
        "You",
        text
    );



    messageInput.value = "";


}



// Add Message To Chat

function addMessage(username,message){


    const div = document.createElement("div");


    div.className = "message";


    div.innerHTML = `

        <strong>${username}</strong>

        <p>${message}</p>

    `;



    messagesBox.appendChild(div);



    messagesBox.scrollTop =
    messagesBox.scrollHeight;


}
