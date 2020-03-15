//storing object 
var connection = require("../DBConfig/DBConfig");

module.exports.storeEnrollmentDetails = function(enrollmentDetails,callback){
    var sql = "INSERT INTO enrollmentdetails SET ?";
       connection.query(sql, enrollmentDetails,function (err, result) {
          if (err) throw err;
          console.log("1 record inserted"); 
           callback(true);
          });
}

module.exports.isAlreadyExists= function(mobileNumber,callback){
    var sql = "select * from enrollmentdetails where Contactnumber = ?"
    connection.query(sql,mobileNumber,function(err,result){
        if(err) throw err;

        if(result.length > 0){
            callback(true);
        }
        else{
            callback(false);
        }
    })
}