var http = require('http');

	var options = {
		"method": "GET",
		"hostname": "localhost",
		"port": "8090",
		"path": "/s3",
		"headers": {
			"cache-control" : "no-cache"
		}
	};
	
	var req = http.request(options, function (data, res) {
		var chunks = [];
		
		res.jsonp(dataRes);
	});
	
	req.end();

