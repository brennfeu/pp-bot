// DATABASE
var MYSQL = require('sync-mysql');
var DB_CONNECTION = new MYSQL({
	host: process.env.DB_HOST,
	user: process.env.DB_LOGIN,
	password: process.env.DB_PASSWORD,
	database: "brennfeu_pp_punch"
});

function executeQuery(_str) {
	try {
		return DB_CONNECTION.query(_str)
	}
	catch(e) {
		console.log("QUERY ERROR :")
		console.log(_str)
		throw e
	}
}
