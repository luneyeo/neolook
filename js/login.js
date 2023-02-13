window.onload = function(){
    //console.log(window.document.getElementById("fixed_button")) 


    let fixButton = window.document.getElementById("fixed_button");
    fixButton.classList.add("fixed_button_hidden")
    
    fixButton.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    window.document.addEventListener('scroll', function(event){
        
        if (window.scrollY === 0) {
            fixButton.classList.remove("fixed_button_active")
        } else {
            fixButton.classList.add("fixed_button_active")
        }

    }) 

};

// jQuery로 탭 설정

$(function(){
    $('#btn_non_member').click(function(){
        $('.non_member_login').css({display:'block'});
        $('.member_login').css({display:'none'});
        $('#btn_non_member').css({backgroundColor:'#000',color:'#fff'});
        $('#btn_member').css({backgroundColor:'#fff',color:'#000'});

    });
    $('#btn_member').click(function(){
        $('.member_login').css({display:'block'});
        $('.non_member_login').css({display:'none'});
        $('#btn_member').css({backgroundColor:'#000',color:'#fff'});
        $('#btn_non_member').css({backgroundColor:'#fff',color:'#000'});

    })
});

$(document).ready(function() {


    // 버튼 클릭시 사이드바 변화
    btn = $('#toggle');
    layer = $('#layer');
    btn.click(function() {
        layer.toggle(
            function(){layer.addClass('show')},
            function(){layer.addClass('hide')}
        );
    });

    // 버튼 클릭시 on class 추가
    $('#toggle').click(function(){
        $('#toggle').toggleClass("on");
    });

});