import "../sass/style.scss";

class Doggo {
  constructor() {
    this.apiUrl = "https://dog.ceo/api";
    this.imgEl = document.querySelector(".featured-dog img");
    this.backgroundEl = document.querySelector(".featured-dog__background");
    this.tilesEl = document.querySelector(".tiles");
    this.spinnerEl = document.querySelector(".spinner");

    this.init();
  }

  listBreeds() {
    return fetch(`${this.apiUrl}/breeds/list/all`)
      .then((res) => res.json())
      .then((data) => data.message);
  }

  getRandomImage() {
    return fetch(`${this.apiUrl}/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => data.message);
  }

  getRandomImageByBreed(breed) {
    return fetch(`${this.apiUrl}/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => data.message);
  }

  showAllBreeds() {
    this.listBreeds().then((breeds) => {
      for (const breed in breeds) {
        if (breeds[breed].length === 0) {
          this.addBreed(breed);
        } else {
          for (const subBreed of breeds[breed]) {
            this.addBreed(breed, subBreed);
          }
        }
      }
    });
  }

  addBreed(breed, subBreed) {
    const tile = document.createElement("div");
    tile.setAttribute("class", "tiles__tile");

    const tileContent = document.createElement("div");
    tileContent.setAttribute("class", "tiles__tile-content");
    tileContent.textContent = `${breed} ${subBreed || ""}`;

    tile.appendChild(tileContent);
    this.tilesEl.appendChild(tile);

    const type = subBreed ? `${breed}/${subBreed}` : `${breed}`;

    tileContent.addEventListener("click", () => {
      this.showLoading();
      this.getRandomImageByBreed(type).then((imgSrc) => {
        this.imgEl.setAttribute("src", imgSrc);
        this.hideLoading();
      });
    });
  }

  showLoading() {
    this.spinnerEl.classList.add('spinner--visible');
  }

  hideLoading() {
    this.spinnerEl.classList.remove('spinner--visible');
  }

  init() {
    this.showLoading();
    this.getRandomImage().then((imgSrc) => {
      this.imgEl.setAttribute("src", imgSrc);
      this.backgroundEl.style.backgroundImage = `url("${imgSrc}")`;
      this.hideLoading();
    });

    this.showAllBreeds();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Doggo();
});
