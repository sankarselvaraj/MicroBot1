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
    body = JSON.parse(body);
	console.log(body);
  });
});