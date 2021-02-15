var express = require('express')
// create an instance of express
var app = express()

app.use(express.static('public'));

var submittedData = [];

app.get('/formpost', function (req, res) {
  console.log("You submitted: " + req.query.textfield);
  
  var dataToSave = `
  <html>
    <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body><h3>BUMP!</h3>
    <p>you submitted
  `
  + req.query.textfield +
  ` </p>
    <p><a href='/display'>All you've got</a></p>
    </body>
  </html>
  `;

  res.send(dataToSave);
  // save into an array
  submittedData.push(req.query.textfield);
})

// go to /display to see the results
app.get('/display', function(req, res) {
  
    var output = `
  
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
    <h3>These are all of your classes submitted!</h3>
  `;


  for (var i = 0; i < submittedData.length; i++) {
       var fontSize = 24;
       // Math.floor(Math.random() * 80) + 10;
       output += "<div style="
       + "font-size:" + fontSize + ">" + submittedData[i] + "</div>";
      }


  res.send(output);
})


// listening port
app.listen(80, function () {
  console.log('App listening on port 80!')
})