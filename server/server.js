//require dependencies
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 4200;

var controller = require('./controllers/Controller');

//define a route, usually this would be a bunch of routes imported from another file

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

app.use('/', router);

app.route('/controller')
.get(controller.getRow);

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('Server started on: ' + port);