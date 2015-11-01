var models = require('../models');
var bluebird = require('bluebird');
var rh = require('./request-handler');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
      res.send(JSON.stringify(data))
      });
      // rh.requestHandler(req,res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      res.send(req.body)
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
