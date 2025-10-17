window.onload = function () {
  const header = document.getElementById('header');
  header.innerHTML = '<i> i 태그입니다.</i><br/>';
  header.innerHTML += '&lt;i&gt;i 태그입니다. &lt;/&gt;';
  header.textContent = '<i>i 태그입니다,';
};

// innerHTML, innerText, textContent 차이점
/*
innerHTML: HTML 전체 내용 가져옴
innerText: 사용자에게 보여지는 텍스트를 가져옴
textContent: 해당 노드가 가지고 있는 텍스트 값 그대로 읽음.
*/
