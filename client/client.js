// establishes a connection with the game server
const net = require("net");
const {IP, PORT, NAME, moveDown, moveUp, moveLeft, moveRight} = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(NAME);
    conn.write(moveDown);
    conn.write(moveUp);
    conn.write(moveLeft);
    conn.write(moveRight);
  });

  conn.on("data", data => {
    console.log(data);
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};