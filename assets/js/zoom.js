// Initialize medium zoom.
const mediumZoomMargin = 100;
const mediumZoomBackground = 'rgba(255, 255, 255, 0.72)';
const mediumZoomFullWidthRatio = 0.9;
const mediumZoomMeaningfulScale = 1.1;

window.mediumZoomBackground = mediumZoomBackground;

const isFullWidthPainting = (image) => {
  const column = image.closest('.col, [class^="col-"], [class*=" col-"]');
  const row = column ? column.closest('.row') : null;

  if (column && row) {
    const columnWidth = column.getBoundingClientRect().width;
    const rowWidth = row.getBoundingClientRect().width;

    return rowWidth > 0 && columnWidth / rowWidth >= mediumZoomFullWidthRatio;
  }

  const layoutContainer = image.closest('.row, .grid, article, .container');
  const containerWidth = layoutContainer
      ? layoutContainer.getBoundingClientRect().width
      : document.documentElement.clientWidth || window.innerWidth;
  const imageWidth = image.getBoundingClientRect().width;

  return containerWidth > 0 && imageWidth / containerWidth >= mediumZoomFullWidthRatio;
};

const wouldZoomMeaningfully = (image) => {
  const imageRect = image.getBoundingClientRect();
  const naturalWidth = image.naturalWidth || imageRect.width;
  const naturalHeight = image.naturalHeight || imageRect.height;
  const availableWidth = Math.max(window.innerWidth - (mediumZoomMargin * 2), 0);
  const availableHeight = Math.max(window.innerHeight - (mediumZoomMargin * 2), 0);

  if (imageRect.width === 0 || naturalWidth === 0 || naturalHeight === 0) {
    return false;
  }

  const zoomScale = Math.min(
      naturalWidth / imageRect.width,
      naturalHeight / imageRect.height,
      availableWidth / imageRect.width,
      availableHeight / imageRect.height
  );

  return zoomScale >= mediumZoomMeaningfulScale;
};

const shouldEnablePaintingZoom = (image) => {
  return !isFullWidthPainting(image) && wouldZoomMeaningfully(image);
};

$(document).ready(function() {
  medium_zoom = mediumZoom({
    margin: mediumZoomMargin,
    background: mediumZoomBackground,
  });

  const zoomableImages = Array.from(document.querySelectorAll('[data-zoomable]'));
  const updateZoomForLayout = () => {
    zoomableImages.forEach((image) => {
      if (shouldEnablePaintingZoom(image)) {
        medium_zoom.attach(image);
      } else {
        medium_zoom.detach(image);
      }
    });
  };

  zoomableImages.forEach((image) => {
    image.addEventListener('click', (event) => {
      if (!shouldEnablePaintingZoom(image)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);

    if (image.complete) {
      updateZoomForLayout();
    } else {
      image.addEventListener('load', updateZoomForLayout, { once: true });
    }
  });

  updateZoomForLayout();
  window.addEventListener('resize', updateZoomForLayout);
  window.addEventListener('orientationchange', updateZoomForLayout);
});
