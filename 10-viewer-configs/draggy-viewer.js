var Crocodoc = window.Crocodoc;

module.exports = function (element, url) {
  var viewer = Crocodoc.createViewer(element, {
    url: url,
    enableTextSelection: false,
    enableDragging: true,
    layout: Crocodoc.LAYOUT_HORIZONTAL,
    zoom: Crocodoc.ZOOM_FIT_HEIGHT
  });
  viewer.load();
  return viewer;
}
