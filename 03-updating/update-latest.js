var client = require('box-view').createClient('<TOKEN>')

module.exports = function (name, callback) {
  client.documents.list(function (err, list) {
    var doc = list.document_collection.entries[0];
    client.documents.update(doc.id, { name: name }, function (err, doc) {
      callback(doc);
    });
  });
};
