const form = document.querySelector(".form");
const results = document.querySelector(".results");

function getData(e) {
  e.preventDefault();
  const genderValue = e.target.elements["gender"].value;
  const numberValue = e.target.elements["number"].value;
  const url = `https://randomuser.me/api/?results=${numberValue}&gender=${genderValue}`;
  results.innerHTML = '';

  fetch(url)
    .then((response) => response.json())
    .catch(err => console.log(err))
    .then(json => renderResults(json.results))
}

function renderResults(users) {
  users.forEach((user) => {
    const username = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const avatar = user.picture.medium;
    const userElement = createUserElement(username, avatar);

    results.appendChild(userElement);
  });
}

function createUserElement(username, avatar) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  div.classList.add("result");
  img.classList.add("result__img");
  img.setAttribute("src", avatar);
  span.textContent = username;
  div.appendChild(img);
  div.appendChild(span);

  return div;
}

form.addEventListener("submit", getData);