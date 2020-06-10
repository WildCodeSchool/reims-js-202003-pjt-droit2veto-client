const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost',
  user :  'angelique',
  password :  'Bija2413!',
  database :  'Droit2Veto',
});

module.exports = connection;