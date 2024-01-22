'use strict';

var express = require('express');
var app = express();

app.set("port", process.env.PORT || 18800);

const http = require("http");

function call_web() {
   http
   .get(`http://app:17700`, resp => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", chunk => {
         data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
         let url = JSON.parse(data).message;
         console.log(url);      
      });
   })
   .on("error", err => {
      console.log("Error: " + err.message);
   });
}

app.get('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method." }
   console.log(response);
   res.end(JSON.stringify(response));
   call_web();
})

var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
