var connection = require("../DBConfig/DBConfig");

module.exports.checkLoginCredentials = function (siginDeatis, callback)   {
    var qs = "SELECT COUNT(*) as Records_found FROM userdetails WHERE username=\"" + request.body.username + "\"";
var res = connection.query(qs, function (err, result) {
if (err)
	{throw err;}
	console.log(result);
    count = result[0]['Records_found'];	
    console.log('count: ' + count);	

    if (countAd=="1"){
        callback(true);
    }
    else{
        callback(false);
    } 
});		
};

module.exports.storeUserDetails = function(userDetails,callback){
    var sql = "INSERT INTO userdetails SET ?";
       connection.query(sql, userDetails,function (err, result) {
          if (err) throw err;
          console.log("1 record inserted"); 
           callback(true);
          });
}
