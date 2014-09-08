var Crocodoc = window.Crocodoc;
var updateConversionProgress = require('update-conversion-progress');

module.exports = function (element, assetsURL, realtimeURL) {
  var viewer = Crocodoc.createViewer(element, {
    url: assetsURL,
    plugins: {
      realtime: {
        url: realtimeURL
      }
    }
  });
  viewer.load();
  viewer.on('ready', function (ev) {
    var numPages = ev.data.numPages;
    viewer.on('realtimeupdate', function (ev) {
      updateConversionProgress(100 * ev.data.page / numPages);
    })
  })
  return viewer;
};
