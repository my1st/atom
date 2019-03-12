var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false}))
app.get('/template',function(req, res){
  res.render('temp', {time:Date(), _title:'Jade'});
});
app.use(express.static('public'));
app.get('/form', function(req, res){
  res.render('form');
});
app.get('/form_receiver', function(req, res){
  res.send('Hello, GET')
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});
app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
})
app.get('/topic', function(req, res){
  var topics = [
    'Javascript is...',
    'Nodejs is...',
    'Express is...'
  ];
  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
  `
  res.send(output);
})
app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id+','+req.params.mode)
})
app.get('/param/:module_id/:topic_id', function(req, res){
  res.json(req.params);
})
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
        ${lis}
        </ul>
    </body>
  </html>
`;
  res.send(output)
})

app.get('/route', function(req, res){
  res.send('Hello Router <img src="/a.jpg">')
})
app.get('/', function(req, res){
    res.send('hello world!');
});
app.get('/login', function(req, res){
  res.send('<h1>Login Please</h1>');
})
app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
