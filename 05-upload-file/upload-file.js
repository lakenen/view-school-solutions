var client = require('box-view').createClient('<TOKEN>');

module.exports = function (file, callback) {
  client.documents.uploadFile(file, function (err, doc) {
    callback(doc);
  });
}
