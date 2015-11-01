// var controllers = require('./controllers');
var controllers = require('./controllers');
var router = require('express').Router();

// for (var route in controllers) {
//   router.route("/" + route)
//     .get(controllers[route].get)
//     .post(controllers[route].post);
// }
// var route = 'index.js';
for (var route in controllers) {
  console.log('hit the for loop!: ' + route)
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}


module.exports = router;
