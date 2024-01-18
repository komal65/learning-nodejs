const express = require('express')
const app = express();

app.set("view engine" ,"ejs");

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render("index" , {company:"komal"} );
});



app.get('/error', function (req, res ,next) {
  throw  Error("Error  404 , Page ot Found")
});

app.get('/about_us', function (req, res) {
  res.render("about_us" );
});



app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000);

// app.get('/about', function (req, res) {
//   res.send('Tell me something about you ? !!')
// })




// app.get("/about/:username", function (req, res) {
//   res.send(`${req.params.username} , Tell me something about Yourself`)
// })





