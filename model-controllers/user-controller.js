/**
 * en cargado de realizar todas las operaciones sobre base de datos que tengan que ver con usuarios
 */
var db = require('../database.js')

exports.create = function(name, nickname, pass, email, done) {
  var values = [author, place, photoPath, new Date().toISOString()];
  
  db.getConnection().query('INSERT INTO usuarios (nombre, ninckname, pass, correo) VALUES(?, ?, ?, ?)', values, function(err, result) {
    if (err) 
    	return done(err);
    done(null, result.insertId);
  });
};

exports.getAll = function(done) {
  db.getConnection().query('SELECT * FROM usuarios', function (err, rows) {
    if (err) 
    	return done(err);
    done(null, rows);
  });
};
