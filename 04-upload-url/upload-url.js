var client = require('box-view').createClient('<TOKEN>');

module.exports = function (url, callback) {
  var options = {
    params: {
      name: 'my awesome document'
    }
  };
  client.documents.uploadURL(url, options, function (err, res) {
    callback(res);
  });
}
