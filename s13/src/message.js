export const message = (info) => {
  console.log(info)
}

export const messageDOM = (info) => {
  document.querySelector('div').textContent = info;
}
