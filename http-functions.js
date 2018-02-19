var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

  var a = ""

  response.setEncoding('utf8');

  response.on('data', function (data) {
    a += data;
  });

  response.on('end', function() {
    callback(a);
  });

 });

}



