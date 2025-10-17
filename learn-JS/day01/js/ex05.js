window.onload = function () {
  const header = document.getElementById('header');

  const text = header.innerHTML;
  header.style.color = 'orange';
  header.style.backgroundColor = 'green';
  header.innerHTML = text + '<br/> From JavaScript';
};
