
const ball = document.querySelector(".ball"),
  btn = document.querySelector(".btn-action"),
  spring = document.querySelector(".spring"),
  fill = document.querySelector(".fill");

const stretchSpring = () => {
  console.log("naciągamy");
  fill.style.animationPlayState = 'running';
  spring.style.animationPlayState = 'running';
  btn.textContent = "Puść sprężynę";

  btn.removeEventListener('mousedown', stretchSpring);
  btn.removeEventListener('touchstart', stretchSpring);
};

const releaseSpring = () => {
  console.log("puszczamy");
  const fillStyles = getComputedStyle(fill);
  const fillWidth = parseInt(fillStyles.width, 10);
  const barWidth = parseInt(getComputedStyle(document.querySelector('.bar')).width, 10);
  const progressPercent = (fillWidth / barWidth).toFixed(2);
  fill.style.animationPlayState = "paused";

  btn.textContent = `Moc uderzenia to ${(progressPercent * 100).toFixed()}%`
  document.documentElement.style.setProperty('--power-x', `${30 + progressPercent * 65}%`);
  ball.style.animation = "fly-ball-x 1s forwards .15s cubic-bezier(.17,.67,.6,1), fly-ball-y 1s forwards .15s linear";

  document.documentElement.style.setProperty('--spring-left', getComputedStyle(spring).left);
  spring.style.animation = "release-spring .2s linear";
};

const resetAnimation = () => {
  console.log("reset animacji");
};


btn.addEventListener('mousedown', stretchSpring);
btn.addEventListener('mouseup', releaseSpring);
btn.addEventListener('touchstart', stretchSpring);
btn.addEventListener('touchend', releaseSpring);