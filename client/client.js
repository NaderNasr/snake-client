// establishes a connection with the game server
const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.0.96',
    port: 50541,
  });
  
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write("Name: ___");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;