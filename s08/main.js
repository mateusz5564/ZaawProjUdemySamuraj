document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller('#scroller');
  document.addEventListener("wheel", scroller.listenScroll);
});
