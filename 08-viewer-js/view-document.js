var Crocodoc = window.Crocodoc;

module.exports = function (element, url) {
  var viewer = Crocodoc.createViewer(element, {
    url: url
  });
  viewer.load();
  return viewer;
};
