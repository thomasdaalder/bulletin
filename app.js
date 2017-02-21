const 	express = require('express'),
		fs = require('fs'),
		app = express(),
		bodyParser = require('body-parser'),
		pg = require('pg'),
		db = require(__dirname + '/models/db.js')


app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static('./', {
}));

// app.use(bodyParser.json('/users.json')); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies
// app.use(express.static('static'))

app.get('/', (request, response) => {
	response.render('index');

});

app.get('/messages', function(req, res) {
	  db.Messages.findAll()
    .then((allMessages) => {
        res.render('messages', {names: allMessages});
    })
});

app.post('/messages', function(req, res){
	console.log(req.body)
	db.Messages.create({
		title: req.body.title,
		body: req.body.body,
		name: req.body.name
	})
	.then(()=>{
		res.redirect('/messages');
	})
});

app.listen(3000, () => {
	console.log('Server has started.');
});
