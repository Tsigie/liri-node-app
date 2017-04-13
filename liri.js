var keys = require ("./keys.js");


var twitter = require ("twitter");

var client = new twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: ''
});

var spotify = require ("spotify");

spotify.search ({
	type: "track", query: "I Want it That Way" }, function(err, data) {
		if (err) {
			console.log("Error occurred: " + err);
			return;
		}
});

var request = require ("request");
request("http://www.google.com", function (error, response, body) {
	console.log("error:", error); 
	console.log("statusCode:", response && response.statusCode);
	console.log("body", body);
});



var fs = require ("fs");



