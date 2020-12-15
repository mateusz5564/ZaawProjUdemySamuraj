class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = [...document.querySelectorAll(".scroller__section")];
    this.currentSectionIndex = this.sections.findIndex(this.isScrolledIntoView);
    this.isThrottled = false;
    this.drawNavigation();
  }

  listenScroll = (e) => {
    if (this.isThrottled) return;
    this.isThrottled = true;
    setTimeout(() => (this.isThrottled = false), 500);

    const direction = e.deltaY > 0 ? 1 : -1;

    this.scroll(direction);
  };

  scroll(direction){
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currentSectionIndex += direction;

    this.scrollToCurrentSection();
  };

  scrollToCurrentSection(){
    this.selectActiveNavItem();
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
    });
  };

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0;
  }

  drawNavigation(){
    this.navigationContainer = document.createElement("aside");
    this.navigationContainer.setAttribute("class", "scroller__navigation");
    const list = document.createElement("ul");
    list.setAttribute("class", "scroller__nav-list");

    this.sections.forEach((el, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("class", "scroller__nav-item");
      listItem.addEventListener("click", (e) => {
        this.currentSectionIndex = index;
        this.scrollToCurrentSection();
      });

      list.appendChild(listItem);
    });
    
    this.navigationContainer.appendChild(list);
    document.body.appendChild(this.navigationContainer);
    this.selectActiveNavItem();
  };

  selectActiveNavItem(){
    const navigationItems = this.navigationContainer.querySelectorAll(
      ".scroller__nav-item"
    );
    navigationItems.forEach((el, index) => {
      index === this.currentSectionIndex
        ? el.classList.add("scroller__nav-item--active")
        : el.classList.remove("scroller__nav-item--active");
    });
  };
}
