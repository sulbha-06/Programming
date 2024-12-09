// messageWorker.js
self.onmessage = function (event) {
  if (event.data === "start") {
    // Simulate receiving messages in intervals
    setInterval(() => {
      const message = `New message received at ${new Date().toLocaleTimeString()}`;
      self.postMessage(message); // Send message back to the main thread
    }, 3000);
  }
};
