
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



// $(document).ready(function () {


//   // 버튼 클릭시 사이드바 변화
//   btn = $('#toggle');
//   layer = $('#layer');
//   btn.click(function () {
//     layer.toggle(
//       function () { layer.addClass('show') },
//       function () { layer.addClass('hide') }
//     );
//   });

//   // 버튼 클릭시 on class 추가
//   $('#toggle').click(function () {
//     $('#toggle').toggleClass("on");
//   });

// });


const menuEl = document.querySelector('.menu_toggle');
const menuToggleBtn = document.querySelector('#toggle');
let isHideMenu = true;

function hideMenu() {menuEl.classList.remove('show');}
function showMenu() {menuEl.classList.add('show');}

menuToggleBtn.addEventListener('click', function(event) {
  event.stopPropagation()
  isHideMenu = !isHideMenu
  if(isHideMenu) {
    // 숨김처리
    hideMenu()
  } else {
    // 보임 처리
    showMenu()
  }
})

// 메뉴 영역 클릭했을때 전파끊기
menuEl.addEventListener('click', function(event) {
  event.stopPropagation()
})

// 윈도우 영역 클릭 했을때 메뉴 화면 사라지기
window.addEventListener('click', function() {
  hideMenu()
})