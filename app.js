const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect('mongodb://localhost/palfolioDB-dev', {})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));


// Load Show Specs Model

require('./models/ShowSpecs');
const Idea = mongoose.model('showID')


// Handlebars Middleware
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Body parser middleware
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())


// Index Route
app.get('/', (req, res) => {
	const title = 'Welcome';
	res.render('index', {
		title: title
	});
});

//ABOUT Route
app.get('/about', (req, res) => {
	res.render('about');
});

// Add New Show Specs
app.get('/showSpecs/add', (req, res) => {
	res.render('showSpecs/add');
});

// Process Form
app.post('/showSpecs', (req, res) => {
	console.log(req.body);
	res.send('OK');
});


const port = 5000;

app.listen(port, () => {
	console.log(`Server Started on port ${port}`);
});