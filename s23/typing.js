const box = document.querySelector(".typing");
const text = 
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
let letterIndex = 0;
let oldTime = 0;
const minPause = 100;

const typing = (currentTime) => {
  if(currentTime - oldTime > minPause) {
    oldTime = currentTime;
    const letter = text.substr(letterIndex, 1);
    box.querySelector("p").textContent += letter;
    letterIndex++;
  }
  requestAnimationFrame(typing);
}

typing();