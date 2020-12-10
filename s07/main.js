const form = document.querySelector('.form');
const results = document.querySelector('.results');
let users;

function getData(e) {
  e.preventDefault();
  const genderValue = e.target.elements['gender'].value;
  const numberValue = e.target.elements['number'].value;
  const url = `https://randomuser.me/api/?results=${numberValue}&gender=${genderValue}`;

  fetch(url)
  .then((response) => {
    return response.json();
  })
  .catch(err => console.log(err))
  .then(json => {
    users = json.results;
    renderResults(users);
  })
}

function renderResults(users) {
  users.forEach((user) => {
    const username = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const avatar = user.picture.medium;
    const userElement = createUserElement(username, avatar);

    results.appendChild(userElement);
  })
}

function createUserElement(username, avatar) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  div.classList.add('result');
  img.classList.add('result__img');
  img.setAttribute('src', avatar);
  span.textContent = username;
  div.appendChild(img);
  div.appendChild(span);
  
  return div;
}

form.addEventListener('submit', getData)