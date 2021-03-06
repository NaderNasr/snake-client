const connect = require('./client/client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  process.stdout.write(`You quit \n`);
  if (key === '\u0003') {
    process.exit();
  }
  
};



console.log("Connecting ...");
connect();
setupInput();

