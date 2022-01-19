const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.0.96',
    port: 50541,
  });
  
  conn.on("connect", () => {
    console.log('hello from client');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
