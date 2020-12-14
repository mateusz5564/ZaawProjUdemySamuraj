document.addEventListener("DOMContentLoaded", function () {
  const scrollerElement = document.querySelector(".scroller");
  const sections = document.querySelectorAll(".scroller__section");
  let currentSectionIndex = 0;
  let isThrottled = false;

  document.addEventListener("wheel", function (e) {
    console.log(isThrottled);
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => (isThrottled = false), 500);

    const direction = e.deltaY > 0 ? 1 : -1;

    scroll(direction);
  });

  function scrollToCurrentSection() {
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  }

  function scroll(direction) {
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    currentSectionIndex += direction;

    scrollToCurrentSection();
  }
});
