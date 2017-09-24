const express = require('express');
const http = require('http');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../build/index.html'));
});

app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
