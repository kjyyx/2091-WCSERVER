//Task Name: Laboratory Activity 3: Creating Node.js Application
//Author: Kenji P. Jaculbia
//Section: WD-201

var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {
  //create web server
  if ((req.url == '/')) { //check the URL of the current request

    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // set response content
    res.write('<html><body><h1>Welcome to my Node.js Application</h1><p>Welcome. This activity is about basics of Node.js</p> </body></html>');
    res.end();
  } 
  
  else if ((req.url == '/about')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h>This is the About Page</h1><p>Hello. This activity will teach you on how to deal with a simple server and local modules in Node.js</p></body></html>');
    res.end();
  } 

  else if ((req.url == '/contact')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h>This is the Contact Page</h1><p>if you wwant additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs</p></body></html>');
    res.end();
  } 

  else if ((req.url == '/admin')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body> <p>This is admin Page.</p> </body></html>');
    res.end();
  } 
  
  else res.end('Invalid Request!');
});

server.listen(5000); //6 - listen for any incoming requests
console.log('Node.js web server at port 5000 is running..');
