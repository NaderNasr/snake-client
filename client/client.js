// establishes a connection with the game server
const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });
  
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: YO!');
    conn.write('Move: down');
    conn.write('Move: up');
    conn.write('Move: left');
    conn.write('Move: right');
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