var through = require('through');

module.exports = function () {
  var input = '';

  return through(
    function (chunk) {
      input += chunk;
    },
    function () {
      var js = input.replace('<TOKEN>', process.env.BOX_VIEW_API_TOKEN);

      this.queue(js);
      this.queue(null);
    }
  );
};
