var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
	//res.send('Hello World!')
	res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`GoT helper running on port ${port}!`);
});