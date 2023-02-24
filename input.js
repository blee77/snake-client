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
  
  // if (key === 'w') {
  //   connection.write("Move: up");
  //   console.log("Move: up");
    
  // } if (key === 'a') {
  //   connection.write("Move: left");
  //   console.log("Move: left");
  // }
  // if (key === 's') {
  //   connection.write("Move: down");
  //   console.log("Move: down");
  // }
  // if (key === 'd') {
  //   connection.write("Move: right");
  //   console.log("Move: right");
  // }

  // Map key strokes to the write command string
  const mappings = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right",
  };
  if (key === 'g') {
    connection.write("Say: Hello");
    console.log("Say: Hello");
  }
  
  // Short circuit if user does the Ctrl-C key
  if (key === "\u0003") {
    return process.exit();
  }
  
  // handles all other key strokes
  if (mappings[key]) {
    connection.write(mappings[key]);
  }
  
};

module.exports = {
 
  setupInput,
 
};

