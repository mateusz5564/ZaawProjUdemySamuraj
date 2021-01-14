const spinner = document.querySelector('.v2')

const fps = 1000 / 60;
let deg = 0;
const degChange = 6;

const rotate = () => {
  deg += 6;
  spinner.style.transform = `rotate(${deg}deg)`;

  setTimeout(rotate, fps);
}

rotate();