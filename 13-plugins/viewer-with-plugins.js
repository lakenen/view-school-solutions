var Crocodoc = window.Crocodoc;
var fullscreenBtn = document.querySelector('.fullscreen-btn');
var downloadBtn = document.querySelector('.download-btn');

module.exports = function (element, viewURL, downloadURL) {
  var viewer = Crocodoc.createViewer(element, {
    url: viewURL,
    plugins: {
      download: {
        url: downloadURL
      },
      fullscreen: {
        element: element.parentNode
      }
    }
  });

  fullscreenBtn.addEventListener('click', function () {
    if (viewer.isFullscreen()) {
      viewer.exitFullscreen();
    } else {
      viewer.enterFullscreen();
    }
  });

  downloadBtn.addEventListener('click', function () {
    viewer.download();
  });

  viewer.load();
  return viewer;
};
