const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

var con = mysql.createConnection({
	host	: 'water-database.cex69uznl7nj.us-west-1.rds.amazonaws.com',
	user	: 'admin',
	password: 'iLoveSeniorDesign2020',
	database: 'waterdb',
	multipleStatements: true,
});

con.connect((err) => {
	if (!err)
		console.log('DB connection successful');
	else
		console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

app.listen(3004, () => console.log('Express server is running at port #3004'));


//get all users
app.get('/users', (req, res) => {

	var sql = 'SELECT * FROM users';
	con.query(sql, (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//get one user
// how to call for certain user -> /users/phonenumber
app.get('/users/:phonenumber', (req, res) => {

	var sql = 'SELECT * FROM users WHERE phonenumber = ?';
	con.query(sql, [req.params.phonenumber], (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//delete a user
// how to delete certain user -> /users/phonenumber
app.delete('/users/:phonenumber', (req, res) => {

	var sql = 'DELETE FROM users WHERE phonenumber = ?';
	con.query(sql, [req.params.phonenumber], (err, rows, fields) => {
		if (!err)
			res.send('Deleted successfully');
		else
			console.log(err);
	});
});

//insert a user
app.post('/users', (req, res) => {

	let user = req.body;

	var sql = 'SET @firstname = ?; SET @lastname = ?; SET @community = ?; SET @phonenumber = ?; SET @admin = ?; SET @password = ?; \
				CALL waterdb.AddNewUser(@firstname, @lastname, @community, @phonenumber, @admin, @password);';
	

	con.query(sql, [user.firstname, user.lastname, user.community, user.phonenumber, user.admin, user.password], (err, rows, fields) => {
		if (!err)
			res.send('Inserted successfully');
		else
			console.log(err);
	});
});



//get all reports
app.get('/reports', (req, res) => {

	//var sql = 'SELECT * FROM reports';
	var sql = 'SELECT idreports, title, DATE_FORMAT(date, "%W,%M"), urgent, communities, message, audio, image FROM reports';
	con.query(sql, (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//get one report
// how to call for certain report -> /report/idreports
app.get('/reports/:idreports', (req, res) => {

	var sql = 'SELECT * FROM reports WHERE idreports = ?';
	con.query(sql, [req.params.idreports], (err, rows, fields) => {
		if (!err)
			res.send(rows);
		else
			console.log(err);
	});
});

//insert a new water quality report
app.post('/reports', (req, res) => {

	let report = req.body;

	var sql = 'SET @title = ?; SET @urgent = ?; SET @communities = ?; SET @message = ?; SET @audio = ?; SET @image = ?; \
				CALL waterdb.AddNewReport(@title, @urgent, @communities, @message, @audio, @image);';
	

	con.query(sql, [report.title, report.urgent, report.communities, report.message, report.audio, report.image], (err, rows, fields) => {
		if (!err)
			res.send('New report inserted successfully');
		else
			console.log(err);
	});
});



//insert a new incident report
app.post('/incidents', (req, res) => {

	let incident = req.body;

	var sql = 'SET @sender = ?; SET @community = ?; SET @urgent = ?; SET @message = ?; SET @audio = ?; SET @image = ?; \
				CALL waterdb.AddNewIncident(@sender, @community, @urgent, @message, @audio, @image);';
	

	con.query(sql, [incident.sender, incident.community, incident.urgent, incident.message, incident.audio, incident.image], (err, rows, fields) => {
		if (!err)
			res.send('New incident inserted successfully');
		else
			console.log(err);
	});
});