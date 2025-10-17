window.onload = function () {
  const headers = this.document.querySelectorAll('h1');

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    header.style.color = 'orange';
    header.style.backgroundColor = 'green';
    header.innerHTML = 'From JavaScript';
  }
};
