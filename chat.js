const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const sendBtn = document.getElementById("send");

function addMessage(text, who = "bot") {
  const div = document.createElement("div");
  div.className = "msg " + who;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function getBotReply(userText) {
  const text = userText.toLowerCase();
  if (text.includes("hello") || text.includes("hi")) return "Hello! How can I help you?";
  if (text.includes("form") || text.includes("service")) return "You can fill the form on the Services page.";
  if (text.includes("contact")) return "Please check the Contact page for our contact info.";
  if (text.includes("thank")) return "You're welcome! 😊";
  return "Sorry, I can only answer simple questions about this site.";
}

function sendMessage() {
  const text = inputEl.value.trim();
  if (!text) return;
  addMessage(text, "user");
  inputEl.value = "";
  const reply = getBotReply(text);
  addMessage(reply, "bot");
}

sendBtn.addEventListener("click", sendMessage);
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

addMessage("Hi! I’m your assistant. Ask me about services or contact info.", "bot");
