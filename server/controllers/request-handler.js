var fs = require("fs");
var models = require('../models')

/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/


module.exports = {

  statusCode: 200,

  headers: defaultCorsHeaders,

  post: function(request,response){
    console.log("Serving request type " + request.method + " for url " + request.url);
    //change statuscode to 201 to send back to client side
    response.writeHead(201, headers);
    //'data' comes in chunks so you must concatenate???
    var body = '';
    request.on('data', function (data) {
      body += data;
      //console.log(body)
    });
    console.log('body: ',body)
    request.on('end', function(){
      var post = body;
      //add data to our data object
      models.messages.post(JSON.parse(post));
    })
    response.end(JSON.stringify(posts))
  },

  get: function(request,response){
    // console.log("Serving request type " + request.method + " for url " + request.url);
    response.writeHead(200, headers);

  }


};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"  //added this??
};
