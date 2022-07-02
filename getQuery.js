function Get(table, searchLine){
    var result = new Array();

    const mysql = require("mysql2");
  
    const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    database: "db",
    password: "saprvs"
    });
 
    connection.query("TOP 20 SELECT id, name, description FROM ? "+
    "WHERE name LIKE %?% OR description LIKE %?% " +
    "LIMIT 20;", [table, searchLine, searchLine],
    function(err, results) {
        if (err){
            console.error(err);
        }

        result.set('data', results);
        result.set('count', results.length)
    });

    connection.end();
	
	if(result == new Array())
	{
		result.set('data', null);
		result.set('count', 0);
	}
	
    return result;
}

