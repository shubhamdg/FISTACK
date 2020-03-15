var LoginDao = require("../Dao/LoginDao");

module.exports.login = function(req,res){

    var loginDetails = {
        "username":req.body.username,
         "password":req.body.password
    }
	LoginDao.checkLoginCredentials(loginDetails,function(isValid){
		if(isValid == true){
			req.session.loggedin = true;
			req.session.username = loginDetails.username;
			res.redirect("/home");
		}else{
			res.redirect("/login");
		}
		res.end();
	});
	
}
