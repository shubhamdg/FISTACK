var enrollmentDao = require("../Dao/EnrollmentDao");
//controller 
module.exports.enrollment = function(req,res){
    
      var enrollmentDetails = {
         "firstname":req.body.firstname,
         "lastname":req.body.lastname,
         "contactnumber":req.body.contactnumber,
         "Gender":req.body.gender,
         "dateofbirth":req.body.dateofbirth,
         "Address":req.body.address,
         "STATE":req.body.state,
         "PINCODE":req.body.pincode,
         "Nomineename":req.body.nomineename,
         "Nomineerelationship" :req.body.nomineerelationship
      }
   
      //stringfy convert object to string 
		
      // ? place holder 
      //  var sql = "INSERT INTO enrollmentdetails SET ?";
      //  connection.query(sql, enrollmentDetails,function (err, result) {
      //     if (err) throw err;
      //     console.log("1 record inserted");
      //      res.end();
      //     });
      
      enrollmentDao.isAlreadyExists(enrollmentDetails.contactnumber,function(isExists){
         if(isExists == false){
            enrollmentDao.storeEnrollmentDetails(enrollmentDetails,function(isInserted){
         
               console.log("isInserted : "+isInserted);
               if(isInserted != '' && isInserted == true )
               {   
                  res.write('You sent the firstname "' + JSON.stringify(enrollmentDetails)+'".\n');
                  res.end();
               }
            });
         }else{
            res.write('Merchant already exists with contact number : '+enrollmentDetails.contactnumber);
            res.end();
         }
      });
      
      

};

