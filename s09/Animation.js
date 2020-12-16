class Animation {
  constructor(selector) {
    this.container = document.querySelector(selector),
    this.images = this.container.querySelectorAll(".animation__img")
  }

  listenCursorMove(e) {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    this.images.forEach(img => this.moveElement(img, posX, posY));
  }

  moveElement(img, posX, posY) {
    img.style.transform = `translateX(${- posX * img.dataset.ratiox}px) translateY(${-posY * img.dataset.ratioy}px)`;
  }
}
