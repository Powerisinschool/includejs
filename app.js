var express = require('express'),
    app = express()
    fs = require('fs');

app.use(express.static(__dirname + '/see'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(4600, () => {console.log('Serving')});