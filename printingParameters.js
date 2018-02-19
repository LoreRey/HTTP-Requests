var https = require('https');

function getAndPrintHTML (options) {

  //var requestOptions = options

  https.get(options, function (response) {

  var a = ""

  response.setEncoding('utf8');

  response.on('data', function (data) {
    a += data;
  });

  response.on('end', function() {
    console.log(a);
  });

 });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);