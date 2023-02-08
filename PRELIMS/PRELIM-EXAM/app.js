var message = require('./message.js');
var name = 'Kenji';

console.log(
  message.greet(name) +
    message.congratulations('' + name) +
    message.farewell('' + name)
);
