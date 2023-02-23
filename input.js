// setup interface to handle user input from stdin
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === 'g') {
    connection.write("Say: Hello");
    console.log("Say: Hello");
  }
  if (key === 'w') {
    connection.write("Move: up");
    console.log("Move: up");
    
  } if (key === 'a') {
    connection.write("Move: left");
    console.log("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
    console.log("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
    console.log("Move: right");
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
 
  setupInput,
 
};

