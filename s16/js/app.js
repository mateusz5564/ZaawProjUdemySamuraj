import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const imagesContainer = document.querySelector(".slider__images-container");
  const img1 = document.querySelector(".slider__image-container--first img");
  const img2 = document.querySelector(".slider__image-container--second img");
  const img2Container = document.querySelector(
    ".slider__image-container--second"
  );
  const sliderHandle = document.querySelector(".slider__handle");
  const divider = document.querySelector(".slider__divider");
  let dragging = false;
  let imagesContainerWidth = imagesContainer.offsetWidth;
  let imagesContainerOffsetLeft = imagesContainer.offsetLeft;

  function setImagesWidth() {
    img1.style.width = imagesContainerWidth + "px";
    img2.style.width = imagesContainerWidth + "px";
    imagesContainerOffsetLeft = imagesContainer.offsetLeft;
    imagesContainerWidth = imagesContainer.offsetWidth;
  }

  function getOffset(clientX) {
    const offset = clientX - imagesContainerOffsetLeft;

    if (offset < 0) {
      return 0;
    } else if (offset > imagesContainerWidth) {
      return imagesContainerWidth;
    } else {
      return offset;
    }
  }

  function move(clientX) {
    const percent = (getOffset(clientX) / imagesContainerWidth) * 100;
    img2Container.style.width = percent + "%";
    divider.style.left = percent + "%";
  }

  function initEvents() {
    sliderHandle.addEventListener("mousedown", () => (dragging = true));
    window.addEventListener("mouseup", () => (dragging = false));
    sliderHandle.addEventListener("touchstart", () => (dragging = true));
    sliderHandle.addEventListener("touchend", () => (dragging = false));

    window.addEventListener("mousemove", (e) => {
      if (dragging) {
        move(e.clientX);
      }
    });

    window.addEventListener("touchmove", (e) => {
      if (dragging) {
        move(e.touches[0].clientX);
      }
    });
  }

  setImagesWidth();
  window.addEventListener("resize", setImagesWidth);
  initEvents();
});
