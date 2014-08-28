var client = require('box-view').createClient('<TOKEN>');

function getThumbnail(id, width, height, callback) {
  client.documents.getThumbnail(id, width, height, function (err, response) {
    var ms, retry;
    var retryAfter = response.headers['retry-after']

    if (retryAfter) {
      ms = retryAfter * 1000;
      retry = getThumbnail.bind(null, id, width, height, callback);
      return setTimeout(retry, ms);
    }

    callback(response);
  })
}

module.exports = getThumbnail;
