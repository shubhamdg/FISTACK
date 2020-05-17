var aepsDao = require("../Dao/AEPSDao");

module.exports.getBankDetails = function(req,res){

	aepsDao.getBankDetails(function(result){
        res.setHeader('Content-Type', 'application/json');
        if(result){
			console.log(result);
             res.end(JSON.stringify(result));
		}else{
            res.end(JSON.stringify({ a: 'false' }));
		}
		res.end();   
})
};

module.exports.performTransaction = function(req,res){

    var adhaarnumber=req.body.adhaarnumber;
    var amount=req.body.amount;
    var bank=req.body.bank;

    var transactionDetails = {
        'adhaarnumber':req.body.adhaarnumber,
        'amount':req.body.amount,
        'bank':req.body.bank
    };

    aepsDao.performTransaction(transactionDetails, function(isStored){
        if(isStored){
            res.write("Transaction Successful.");
        }else{
            res.write("Failed to perform transaction.")
        }
        res.end();

    })
};