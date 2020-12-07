const greetings = require("./greetings.json");

let sayHello = function () {
  console.log(greetings.en);
}

module.exports = sayHello;