const axios = require("axios");
const cheerio = require("cheerio");

var scrape = function(){

	return axios.get("https://www.reddit.com").then(function(res) {
	    
	    var $ = cheerio.load(res.data);
	    
	    var NewArts = [];

	    	$(".thing").each(function(i,element){

	    		//we grab all the top posts from the front page of reddit here
	    		var title = $(this).children(".entry").children(".top-matter").children(".title").children("a").text();
	    		var link = $(this).children(".entry").children(".top-matter").children(".title").children("a").attr("href");
	    		var by = $(this).children(".entry").children(".top-matter").children(".tagline").children(".author").text();
	    		var img = "https:" + $(this).children(".thumbnail").children("img").attr("src");


	    		//some of reddits links are just redirects so we have to check and if theyre not then we make it a complete link
	    		var format = link.split("");
	    		if(format[0] === "/"){
	    			link = "https://www.reddit.com" + link;
	    		}





	    		if(title && link && by){
	    			var tiedUp = {
	    				title:title,
	    				link:link,
	    				img:img,
	    				author:by
	    			}
	    			NewArts.push(tiedUp);
	    		}

	    	});
	    	console.log(NewArts);
	    	return NewArts;
		});
	}

	module.exports = scrape;

