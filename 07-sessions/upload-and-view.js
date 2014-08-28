var client = require('box-view').createClient('<TOKEN>');

module.exports = function (url, callback) {
  client.documents.uploadURL(url, function (err, doc) {
    var options = {
      params: {
        is_text_selectable: false,
        duration: 30
      },
      retry: true
    };

    client.sessions.create(doc.id, options, function (err, session, response) {
      callback(session.urls.view);
    });
  });
}
