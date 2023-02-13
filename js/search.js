

// top button
window.onload = function () {

  let fixButton = window.document.getElementById("fixed_button");

  fixButton.classList.add("fixed_button_hidden")
  fixButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  window.document.addEventListener('scroll', function (event) {
    if (window.scrollY === 0) {
      fixButton.classList.remove("fixed_button_active")
    } else {
      fixButton.classList.add("fixed_button_active")
    }
  })




}


let bar = document.getElementById("searchBox");
let searchBox = document.getElementById("searchBox_normal");
let fix = document.getElementById("searchBox_fix");
let searchBoxInput =fix.querySelector('input');


let testHeight = searchBox.clientHeight



window.onscroll = function () {
  myFunction()
  function myFunction() {
    if (window.scrollY >= document.getElementById("main_content").offsetTop) {
      searchBox.style.display = "none";
      fix.style.display = "flex";
    } else {
      searchBox.style.display = "block";
      fix.style.display = "none";
      searchBoxInput.value = ''
    }
  }
};

$(document).ready(function () {
  // 버튼 클릭시 사이드바 변화
  btn = $('#toggle');
  layer = $('#layer');
  btn.click(function () {
    layer.toggle(
      function () { layer.addClass('show') },
      function () { layer.addClass('hide') }
    );
  });
  // 버튼 클릭시 on class 추가
  $('#toggle').click(function () {
    $('#toggle').toggleClass("on");
  });
});