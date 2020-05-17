var siginDao = require("../Dao/SigninDao");


module.exports.signUp =  function (req,res) {
    var siginDetails = {
        "username":req.body.username,
        "password":req.body.password,
        "name":req.body.name,
        "contact":req.body.contact  
    }


    siginDao.storeUserDetails(siginDetails,function(isValid){
        if(isValid == true){
            //res.redirect("/home");
            res.end('Added your details. Now you can go back and login with this new username and password');
		}else{
        //	res.redirect("/login");
        
        res.end('<h1>Username already in use</h1><br>');
		}
		res.end();
    });
}

