require('dotenv').config();
const http = require('http');
const app = require('./app');

const HTTP_PORT = process.env.HTTP_PORT || 5002;





const httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
  console.log("HTTP Server is running on port:",HTTP_PORT);
});
httpServer.on('error', (error) => {
  console.error('HTTP Server error:', error);
});
httpServer.on('listening', () => {
  console.log('HTTP Server is listening...');
});