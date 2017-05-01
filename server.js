var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/reset', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/reset.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/*', (req, res) => {
	var allowedPaths = [ 'banker', 'night' ];

	var hasBadPaths = req.url.split('/').filter(function(n) {
		return allowedPaths.indexOf(n) === -1;
	}).length > 0;

	if(hasBadPaths) {
		res.sendFile(path.join(__dirname + '/public/index.html'));
	}else {
		res.redirect('/');
	}
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`GoT helper running on port ${port}!`);
});