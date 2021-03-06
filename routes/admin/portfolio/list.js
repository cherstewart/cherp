var layout = require('../../../views/admin/portfolio/_items.marko'),
    mongoose = require('mongoose');

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').find({}, function (err, portfolioItems) {
          if (err) {
              return console.error(err);
          } else {
              res.marko(layout, {
                portfolioItems: portfolioItems
              });
          }     
    });
};
