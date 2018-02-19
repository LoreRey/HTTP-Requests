var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
 var output = html.split('').reverse().join('');
 console.log(output);

}

getHTML(requestOptions, printReverse);