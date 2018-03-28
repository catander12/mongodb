var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

var articles = new Schema ({

	title:{
		type:String,
		required:true
	},

	author:{
		type: String,
		required:true
	},
	img:{
		type:String,
		required:false
	},


	link:{
		type:String,
		required:true
	},
	notes:{
		type:Array
	}

});

var articleHolder = mongoose.model("Articles", articles);

// Export the Headline model
module.exports = articleHolder;