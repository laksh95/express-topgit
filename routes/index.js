var express=require('express');
var path=require('path');
var router=express.Router();
router.get('/',function(request,response){
	response.sendFile(path.resolve(__dirname+"/../index.html"));
});
module.exports=router;