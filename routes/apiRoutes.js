
var scrape = require("../scripts/scrape.js")
var db = require("../models");


module.exports = function(app){


  app.post("/submit", function(req, res) {
    console.log("working?");
  
  return scrape()
    .then(function(article){
      db.articles.create(article)
        .then(function(dbArticle) {
          console.log(dbArticle);
          res.render("article",{article:dbArticle});
        })
        .catch(function(err) {
          console.log(err);
        });
   })
  });
  
}