var connection = require("../DBConfig/DBConfig");

module.exports.checkLoginCredentials = function(loginDetails , callback){
	var qs = "SELECT COUNT(*) as Records_found FROM userdetails WHERE username=\"" + loginDetails.username + "\" and password = \"" + loginDetails.password + "\"";
	
	connection.query(qs, function (err, result) {
		if (err){throw err;}
		console.log(result);
		countAd = result[0]['Records_found'];				
		console.log('count: ' + countAd);	
		if (countAd=="1"){
			callback(true);
		}
		else{
            callback(false);
        } 
	});		
};