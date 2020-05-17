var connection = require("../DBConfig/DBConfig");

module.exports.getBankDetails = function(callback){
	var qs = "SELECT * FROM  bank_details";
	
	connection.query(qs, function (err, result) {
		if (err){throw err;}
		console.log(result);
		if (result){
			callback(result);
		}
		else{
            callback(false);
        } 
	});		
};

module.exports.performTransaction = function(transactionDetails,callback){
    var sql = "INSERT INTO transactiondetails SET ?')";
    con.query(sql, function (err, transactionDetails,result) {
        if (err) throw err;
        console.log("1 record inserted"); 
         callback(true);
    });
}