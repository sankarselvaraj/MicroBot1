var restify = require('restify');
var builder = require('botbuilder');


// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());



// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
	const https = require("http");
const url =
  "http://localhost:8090/s3";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    var parsedRec = JSON.parse(body);
	//console.log(parsedRec.bucketName);
	var i = parsedRec.length;
	var j = parsedRec.length - 10;
	for(i; i > j ; j--){
		session.send("Files In S3 %s", parsedRec[i-1].links[0].href);
		i--;
		j++;
	}
  });
});
    
	
});