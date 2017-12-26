var express = require('express');
var bodyParser = require('body-parser');




var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
	res.send(__dirname + 'index.html')
	console.log(res);
})

app.get('/contact', function (req, res) {
	res.send(__dirname + 'contact.html')
})

app.get('/about_me', function (req, res) {
	res.send(__dirname + 'about_me.html')
})
app.listen(3000, function () {
	console.log('go')
})



