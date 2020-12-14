class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll(".scroller__section")];
    this.currentSectionIndex = this.sections.findIndex(this.isScrolledIntoView);
    this.isThrottled = false;

    this.isScrolledIntoView(this.sections[2])
  }

  listenScroll = (e) => {
    if (this.isThrottled) return;
    this.isThrottled = true;
    setTimeout(() => (this.isThrottled = false), 500);

    const direction = e.deltaY > 0 ? 1 : -1;

    this.scroll(direction);
  }

  scroll = (direction) => {
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currentSectionIndex += direction;

    this.scrollToCurrentSection();
  }

  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({ behavior: "smooth" });
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elTop = rect.top;
    console.log(this)

    return elTop >= 0;
  }
}
