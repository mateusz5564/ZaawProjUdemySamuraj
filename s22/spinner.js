// SPINNER v2

const spinner = document.querySelector('.v2')

const fps = 1000 / 60;
let deg = 0;
const degChange = 6;

const rotate = () => {
  deg += degChange;
  spinner.style.transform = `rotate(${deg}deg)`;

  setTimeout(rotate, fps);
}

rotate();



// SPINNER v3

const spinnerRAF = document.querySelector('.v3');

let degRAF = 0;
const degChangeRAF = 6;

const rotateRAF = () => {
  degRAF += degChangeRAF;
  spinnerRAF.style.transform = `rotate(${degRAF}deg)`;

  requestAnimationFrame(rotateRAF);
}

rotateRAF();