// establishes a connection with the game server
const { connect } = require("./client.js");
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput(connect());
