document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller('#scroller');
  document.addEventListener("wheel", scroller.listenScroll);

  document.addEventListener('swipeUp', (e) => {
    scroller.scroll(1);
  });
  document.addEventListener('swipeDown', (e) => {
    scroller.scroll(-1);
  });

});
