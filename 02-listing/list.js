var client = require('box-view').createClient('<TOKEN>');

module.exports = function (callback) {
  client.documents.list(function (err, collection) {
    callback(collection);
  });
};
