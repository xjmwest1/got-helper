var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/reset', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/reset.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`GoT helper running on port ${port}!`);
});