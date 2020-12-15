document.addEventListener("DOMContentLoaded", function () {
  const scroller = new Scroller("#scroller");
  document.addEventListener("wheel", scroller.listenScroll);

  //mobile
  document.addEventListener("swipeUp", (e) => scroller.scroll(1));
  document.addEventListener("swipeDown", (e) => scroller.scroll(-1));

  //keyboard 40/38
  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 40:
        return scroller.scroll(1);
      case 38:
        return scroller.scroll(-1);
      default:
        return;
    }
  });
});
