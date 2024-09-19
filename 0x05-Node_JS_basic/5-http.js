const http = require('http');
const fs = require('fs');

const countStudents = (db_path) => new Promise((resolve, reject) => {
	fs.readFile(db_path, 'utf-8', (err, data) => {
		if (err) {
			reject(new Error('Cannot load the database'));
		}
		if (data) {
			const lines = data.trim().split('\r\n').slice(1);
			const fieldsStds = {};
			for (let i = 0; i < lines.length; i++) {
				const std = lines[i].split(',');
				if (fieldsStds[std[3]]) {
					fieldsStds[std[3]].push(std[0]);
				} else {
					fieldsStds[std[3]] = [std[0]];
				}
			}
			let str = `Number of students: ${lines.length}\n`;
			for (const field in fieldsStds) {
				if (field) {
					const list = fieldsStds[field];
					str += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
				}
			}
			resolve(str);
		}
	}); // end file reading
}); // end promise

const app = http.createServer();
const Port = 1245;
const Host = 'localhost';
const db_path = 'database.csv';

app.on('request', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	if (req.url == '/') {
		res.end('Hello Holberton School!');
	}
	if (req.url == '/students') {
		countStudents(db_path)
			.then((data) => res.end(`This is the list of our students\n${data}`))
			.catch((err) => res.end(err.message));	
	}
});

app.listen(Port, Host, () => {
	console.log(`Server is running on http://${Host}:${Port}`);
});

module.exports = app;
