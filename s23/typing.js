const box = document.querySelector(".typing");
const text = [
  "Lorem ipsum dolor sit amet.^ Consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet 2.^ Consectetur adipisicing 2.",
  "Lorem ipsum dolor sit amet 3.^ Consectetur adipisicing 3.",
];
let letterIndex = 0;
let textIndex = 0;
let oldTime = 0;
const minPause = 50;
let paragraph = document.createElement("p");
box.appendChild(paragraph);

const typing = (currentTime) => {
  if (currentTime - oldTime > minPause) {
    const letter = text[textIndex].substr(letterIndex, 1);
    if (letterIndex === text[textIndex].length) {
      if (textIndex === text.length - 1) return;
      return setTimeout(() => {
        box.textContent = "";
        paragraph = document.createElement("p");
        box.appendChild(paragraph);
        textIndex++;
        letterIndex = 0;
        requestAnimationFrame(typing);
      }, 2000);
    }

    if (letter === "^") {
      paragraph = document.createElement("p");
      box.appendChild(paragraph);
    }

    if (!(letter === "^")) {
      paragraph.textContent += letter;
    }

    oldTime = currentTime;
    letterIndex++;
  }
  requestAnimationFrame(typing);
};

typing();
