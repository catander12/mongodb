
module.exports=function(app){

app.get("/",function(req,res){
	res.render("index",{article:articles});

})

app.get("/home",function(req,res){
	res.render("article");

})


articles = [{link:"https://getbootstrap.com/docs/3.3/components/#navbar",
img:"http://www.saladworks.com/sites/default/files/Sandwich-AvocadoBLT.jpg",
title:"I ate a sandwhich",
author:"james"},{link:"https://getbootstrap.com/docs/3.3/components/#navbar",
img:"http://www.saladworks.com/sites/default/files/Sandwich-AvocadoBLT.jpg",
title:"I ate a sandwhich",
author:"armond"}];




}