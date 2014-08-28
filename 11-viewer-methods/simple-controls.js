var Crocodoc = window.Crocodoc;
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var zoomInButton = document.querySelector('.zoom-in-btn');
var zoomOutButton = document.querySelector('.zoom-out-btn');

module.exports = function (element, url) {
  var viewer = Crocodoc.createViewer(element, {
    url: url
  });
  viewer.load();

  var numPages;

  viewer.on('ready', function (event) {
    numPages = event.data.numPages;
  });

  viewer.on('pagefocus', function (event) {
    prevBtn.disabled = event.data.page === 1;
    nextBtn.disabled = event.data.page === numPages;
  });

  viewer.on('zoom', function (event) {
    zoomInButton.disabled = !event.data.canZoomIn;
    zoomOutButton.disabled = !event.data.canZoomOut;
  });

  prevBtn.addEventListener('click', function () {
    viewer.scrollTo(Crocodoc.SCROLL_PREVIOUS);
  });
  nextBtn.addEventListener('click', function () {
    viewer.scrollTo(Crocodoc.SCROLL_NEXT);
  });

  zoomInButton.addEventListener('click', function () {
    viewer.zoom(Crocodoc.ZOOM_IN);
  });
  zoomOutButton.addEventListener('click', function () {
    viewer.zoom(Crocodoc.ZOOM_OUT);
  });

  return viewer;
};
