const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container');
const messageform = document.getElementById('send-container');
const messageinput = document.getElementById('message-input');

socket.on('chat-message' , data => {
    appendmessage(data)
})

messageform.addEventListener('submit',(e) =>{
e.preventDefault();
const message = messageinput.value;
socket.emit('send-chat-message', message);
messageinput.value = '';
})


function appendmessage(message){
    const messageElement= document.createElement('div');
    messageElement.innerText = message;
    messagebox.append(messageElement);
}
