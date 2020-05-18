const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const serverRoute = require('./routes/server');
const userRoute = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = 'localhost';
const PUBLIC_PATH = path.join(__dirname, '/public');


// use middleware
app.use(morgan('dev'));
app.use(express.static(PUBLIC_PATH));
app.use(bodyParser.json());

app.use('/', (req, res,next) => {
  res.status(200).sendFile(PUBLIC_PATH);
  next();
});
app.use(serverRoute);
app.use(userRoute);



// listen server instance
const server = http.createServer(app);
server.listen(PORT, HOSTNAME, ()=>{
  console.log(`Server running on http://${HOSTNAME}:${PORT}`);
});
