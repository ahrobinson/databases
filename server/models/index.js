var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      // fetch all messages
      db.connection.query('SELECT * from messages', function(err, rows, fields) {
      // db.connection.end();
        var obj = {results:rows}
       if (!err){
        //  console.log('The solution is: ', rows);
         callback(obj);
        //  res.send('hi there')
       }else{
         console.log('Error while performing Query.');
       }
     });
    }, // a function which produces all the messages
    post: function (message) {
      // create a message
      console.log('this is the last step!: ',message)
      var queryString = 'INSERT into messages (text,username,roomname) values ("'+message.text+'","'+message.username+'","'+message.roomname+'")'
      db.connection.query(queryString, function(err){
        if(err){console.log('error!: ', err)}
        else{console.log('successful post!')

        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // fetch all users using db.query
    },
    post: function () {
      // create a user
    }
  }
};
