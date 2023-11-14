const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', ws => {
  console.log('Client connected');

  // Listen for messages from clients
  ws.on('message', message => {
    // Convert the message to string if it's not already
    const stringMessage = message.toString();

    // Broadcast the string message to all connected clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(stringMessage);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
