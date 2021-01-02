export default class {
  constructor() {
    this.element = document.createElement("div");
    this.element.style.height = "100px";
    document.body.appendChild(this.element);
  }

  addBgc(color) {
    this.element.style.backgroundColor = color;
  }
}
