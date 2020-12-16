window.addEventListener('DOMContentLoaded', function() {
  const animation = new Animation('.animation');
  document.addEventListener("mousemove", animation.listenCursorMove.bind(animation));
})
