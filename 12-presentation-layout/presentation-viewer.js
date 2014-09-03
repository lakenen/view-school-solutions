var Crocodoc = window.Crocodoc;

module.exports = function (element, url) {
  var viewer = Crocodoc.createViewer(element, {
    url: url,
    layout: Crocodoc.LAYOUT_PRESENTATION
  });
  viewer.load();
  return viewer;
};
