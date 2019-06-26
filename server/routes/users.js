var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route

router.get('/signup', function (req, res) {
  res.render('signup.ejs');  
})

router.post('/signup', function (req, res) {
  message = '';
  var post  = req.body;
  var name= post.user_name;
  var pass= post.password;
  var fname= post.first_name;
  var lname= post.last_name;
  var mob= post.mob_no;
  var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";
  var query = db.query(sql, function(err, result) {
    message = "Succesfully! Your account has been created.";
    res.render('signup.ejs',{message: message});
  });
})

router.get('/login', function (req, res) {
  var message = '';
  var sess = req.session; 
  res.render('index.ejs',{message: message});  
})

router.post('/login', function (req, res) {
  var message = '';
  var sess = req.session; 
  var post  = req.body;
  var name= post.user_name;
  var pass= post.password;

  var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";                           
  db.query(sql, function(err, results){      
    if(results.length){
        req.session.userId = results[0].id;
        req.session.user = results[0];
        console.log(results[0].id);
        res.redirect('/home/dashboard');
    }
    else{
        message = 'Wrong Credentials.';
        res.render('index.ejs',{message: message});
    }
            
  });
})

router.get('/home/dashboard', function (req, res, next) {
  var user =  req.session.user,
  userId = req.session.userId;
  console.log('ddd='+userId);
  if(userId == null){
     res.redirect("/login");
     return;
  }

  var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";

  db.query(sql, function(err, results){
     res.render('dashboard.ejs', {user:user});    
  });  
})

router.get('/home/logout', function (req, res) {
  req.session.destroy(function(err) {
    res.redirect("/login");
 }) 
})

router.get('/home/profile', function (req, res, next) {
  var userId = req.session.userId;
  if(userId == null){
     res.redirect("/login");
     return;
  }

  var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
  db.query(sql, function(err, result){  
     res.render('profile.ejs',{data:result});
  });
})


router.get('/test', function (req, res) {
  res.send('TEST')
})

module.exports = router