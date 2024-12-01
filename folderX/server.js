const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


wss.on('connection', function connection(ws) {
  console.log('Client connected to WebSocket');
  clients.push(ws);

  ws.on('message', function incoming(message) {
    console.log('Received message from client:', message);

    try {
      const messageData = JSON.parse(message);
      // Extract data from messageData and handle it accordingly
      const { type, location } = messageData;
      
      if (type === 'location') {
        clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'locationUpdate', location }));
          }
        });
      }
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });
  ws.send('Connected to WebSocket server');
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
