const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (userMessage) => {

    const userid = localStorage.getItem('userid')

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userid, message: userMessage
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch('https://trashly.onrender.com/api/v1/message', requestOptions)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        }).catch(() => {
            return alert("There is some problem")
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = async () => {
    userMessage = chatInput.value.trim();

    if (!userMessage)
        return;
    try {
        const message = await generateResponse(userMessage)
    }
    catch (error) {
        console.log()
        return
    }
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

const getAllReply = () => {

    const userid = localStorage.getItem('userid')


    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userid
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch('http://localhost:3000/api/v1/usermessage', requestOptions)
        .then(res => res.json())
        .then((res) => {
            console.log(res.messages)
            const  messages  = res.messages
            n = messages.length
            console.log(n)
            var li = ""
            for (i = 0; i < n; i++) {
                li = li + `
                <li style="text-align: right;">
                    ${messages[i].message}
                </li>`
                if(messages[i].reply)
                {
                    li = li + `
                    <li style="text-align: left; color:blue;font-weight: 600;">
                        ${messages[i].reply}
                    </li>`
                }
            }
            document.getElementById('chat').innerHTML=li
        })
        .catch(() => {
            return alert("There is some problem in reply")
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

getAllReply()