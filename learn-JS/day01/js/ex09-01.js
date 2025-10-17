function buttonClick() {
  const button = document.getElementById('button');
  button.innerHTML += '&#x272A;';
}

window.onload = function () {
  const button = document.getElementById('button');
  button.textContent = '버튼-';
};
