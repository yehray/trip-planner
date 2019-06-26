// //require dependencies
// const express = require('express');
// const app = express();
// const router = express.Router();
// const port = process.env.PORT || 8080;

// var controller = require('./controllers/Controller');
// // var routes = require('./routes');
// // var user = require('./routes/users');
// var http = require('http');
// var path = require('path');
// var session = require('express-session');

// //var methodOverride = require('method-override');
// var mysql      = require('mysql');
// var bodyParser=require("body-parser");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "nopass",
//   database: "trip_planner"
//   });
 
// connection.connect();
 
// global.db = connection;
 
// // all environments
// app.set('port', process.env.PORT || 8080);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//               secret: 'keyboard cat',
//               resave: false,
//               saveUninitialized: true,
//               cookie: { maxAge: 60000 }
//             }))

// //define a route, usually this would be a bunch of routes imported from another file

// router.get('/', function(req, res) {
// 	res.json({ message: 'hooray! welcome to our api!' });	
// });

// app.use('/', router);

// app.route('/controller')
// .get(controller.getRow);

// //start Express server on defined port
// app.listen(port);

// //log to console to let us know it's working
// console.log('Server started on: ' + port);

/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var users = require('./routes/users')
router = express.Router()

var cors = require('cors');
//var methodOverride = require('method-override');

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


var session = require('express-session');
var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");
var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "nopass",
        database: "trip_planner"
});
 
connection.connect();
 
global.db = connection;
 
// all environments
app.use(cors());

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// set routers
app.use('/', users)

app.get('/', routes.index);//call for main index page

//Middleware
app.listen(8080)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




// ...

