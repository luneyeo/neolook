
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
