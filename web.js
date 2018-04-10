var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'http://example.com';
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  var redirectUrl = newBaseURL + request.url;
  // adding this for a permanent redirect to s3 bucket
  if (request.url.includes('Salesforce-Processor-BCR')) {
    redirectUrl = 'https://s3-us-west-1.amazonaws.com/sftrusthomecomplianc/docs/Salesforce-Processor-BCR.pdf'
  }
  response.redirect(301,redirectUrl);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
