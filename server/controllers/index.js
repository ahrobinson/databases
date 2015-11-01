var models = require('../models');
var bluebird = require('bluebird');
var rh = require('./request-handler');



module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('this is a get message from messages')
      res.writeHead(200, rh.headers);

      models.messages.get(function(data){
        res.end(JSON.stringify(data))
      });
      // rh.requestHandler(req,res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('im getting fired with: ', req);
      res.writeHead(201, rh.headers);
      //'data' comes in chunks so you must concatenate???
      var body = '';
      req.on('data', function (data) {
        body += data;

      });
      console.log('this is the data: ' + body);
      req.on('end', function(){
        var post = body;
        //add data to our data object
        models.messages.post(JSON.parse(post));
      })
      res.end()
      // rh.requestHandler(req,res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('this is a get message from users')
      // rh.requestHandler(req,res);
    },
    post: function (req, res) {
      // rh.requestHandler(req,res);
    }
  }
};
