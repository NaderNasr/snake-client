
let connection;
const {moveDown, moveUp, moveLeft, moveRight} = require('./constants');


const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
  
};

const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') { //Exit application
      process.exit();
    }
    if (key === 'w') {
      connection.write(moveUp);
    }
    if (key === "s") {
      connection.write(moveDown);
    }
    if (key === "a") {
      connection.write(moveLeft);
    }
    if (key === "d") {
      connection.write(moveRight);
    }
    if (key === "m") {
      connection.write('BEEEEEEPPP BEEP');
    }
    if (key === "n") {
      connection.write('NOPE');
    }
  });
  
};

handleUserInput();

module.exports = {
  setupInput,
  connection
};