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



