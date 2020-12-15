class Swiper {
  constructor() {
    this.initialX;
    this.initialY;

    document.addEventListener('touchstart', (e) => this.startTouch(e));
    document.addEventListener('touchmove', (e) => this.moveTouch(e));

    this.events = {
      swipeUp: new Event('swipeUp'),
      swipeDown: new Event('swipeDown'),
    }
  }

  startTouch(e) {
    e.preventDefault();

    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  }

  moveTouch(e){
    if(!this.initialX || !this.initialY) return;

    this.currentX = e.touches[0].clientX;
    this.currentY = e.touches[0].clientY;

    const diffX = this.initialX - this.currentX;
    const diffY = this.initialY - this.currentY;

    if(Math.abs(diffX) > Math.abs(diffY)) {
      //axis X
    } else {
      //axis Y
      if(diffY > 0) {
        //up
        document.dispatchEvent(this.events.swipeUp)
      } else {
        //down
        document.dispatchEvent(this.events.swipeDown)
      }
    }

    this.initialX = null;
    this.initialY = null;
  }

}

new Swiper();