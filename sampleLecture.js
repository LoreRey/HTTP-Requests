var http = require('http');

http.get('http://httpbin.org/status/418', function (response) {
    console.log('Status Code: ', response.statusCode);
    console.log('Headers: ', response.headers);

    // String buffer for output
    var output = "";
// var dataLength = 0;

    // Log the data size while it's being downloaded
    response.on('data', function (data) {
        console.log('Chunk length: ', data.length);
        //dataLength += data.length;

        // append our data to our output buffer
        output += data;
    });

    // Log the output when the full download is complete
    response.on('end', function () {
        console.log(output);
    });
});