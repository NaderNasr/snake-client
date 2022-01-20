let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
  
};

const handleUserInput = (data) => {
  console.log(data);
  process.stdin.on('data', (key) => {
    if (key === '\u0003') { //Exit application
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "n") {
      connection.write("Say: HEYYY!");
    }
    if (key === "m") {
      connection.write("Say: I am a hacker ;)");
    }
  });
  
};

handleUserInput();

module.exports = {
  setupInput,
  connection
};