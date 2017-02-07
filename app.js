var express=require('express');
var index=require('./routes/index');
var app=express();
app.use(express.static('public'));
app.get('/',index);
app.listen(3165,function(){
	console.log("Server running on localhost:3165");
});
module.exports=app;