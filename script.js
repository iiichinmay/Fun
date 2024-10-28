let messages = [
    "Installing Tools...",
    "Accessing local server...",
    "Connecting server 1...",     
    "Connection Failed...",
    "Connecting server 2...",     
    "Connected Successfully",
    "Fetching Data...",
];
let name = prompt("Write Username");
if (!name) {
    alert("Please enter a victim name.");
    throw new Error("No name provided");
}

messages.push(`Username: ${name}`);
messages.push("Data Fetched Successfully");
messages.push("Hacking System...");

const messageElement = document.getElementById("message");
const terminal = document.querySelector('.terminal');

async function displayMessages() {
    for (let i = 0; i < messages.length; i++) {
        if ( messages[i] === "Connection Failed..." || messages[i] === "Connected Successfully" || messages[i] === "Fetching Data..." ) {
            await new Promise(resolve => setTimeout(resolve, 3000)); 
        }
        else {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
        }
        messageElement.innerHTML += `${messages[i]}\n`;
    }

    await new Promise(resolve => setTimeout(resolve, 4000)); 

    terminal.classList.add('locked');
    messageElement.innerHTML += "System Successfully Hacked...\n";

    await new Promise(resolve => setTimeout(resolve, 1000)); 
    messageElement.innerHTML = ""; 

    messageElement.innerHTML = `
        <span class="final-message">Access Denied</span><br>
        <span class="final-message">System Hacked</span><br>
        <span class="final-message">Bola Tha Na 1 Min Ruk</span>`
        ;
}
displayMessages();