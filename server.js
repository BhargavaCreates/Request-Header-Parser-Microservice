
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/whoami',(req,res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
if (ip.substr(0, 7) == "::ffff:") {
  ip = ip.substr(7)
}
res.json({
  "ipaddress": ip,
  "software": req.headers['user-agent'],
  "language": req.headers['accept-language']
})
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
