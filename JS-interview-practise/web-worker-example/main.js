// main.js //start this app with live server
const messageWorker = new Worker("messageWorker.js");

// DOM elements
const messageList = document.getElementById("message-list");
const startButton = document.getElementById("start-worker");

// Start the worker
startButton.addEventListener("click", () => {
  messageWorker.postMessage("start");
  console.log("Worker started!");
});

// Handle messages from the worker
messageWorker.onmessage = function (event) {
  const message = event.data;

  // Create a new list item and append it to the message list
  const newMessageItem = document.createElement("li");
  newMessageItem.textContent = message;
  messageList.appendChild(newMessageItem);
};
