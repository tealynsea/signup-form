var express = require('express');
var bodyParser = require('body-parser');

 


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// set up a global variable and initialize it to an empty object
var lastSubmission = {};

app.get('/', function(req, res) {
	// render the index.jade view
	// and tell it about the last submission.
	// Jade will know it as "submissionData"
	res.render('index', {
		submissionData: lastSubmission
	});
});

// add a handler for the form submission
app.post('/formsubmit', function(req, res){

	// pull the submitted data from the request object
	var postedData = req.body;

	// reassign the value to lastSubmission
	lastSubmission = postedData;

	// echo the exact same data back to the page
	 //res.send( 'Welcome, ' + postedData.username );

	// redirect the user
	res.redirect('/success');


app.get('/success', function(req, res) {
	res.render('success')
	//res.redirect('/success')
});


});


var server = app.listen(4101, function() {
	console.log('Express server listening on port ' + server.address().port);
});
