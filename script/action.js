 // 문서가 준비되면 실행
 $(document).ready(function(){
    // .lang_box 안의 a 요소를 클릭하면
    $('.lang_box a').click(function(event){
        // 클릭 시 기본 동작(링크 이동)을 막음
        event.preventDefault();
        // .lang 요소의 표시 상태를 토글(보이기/숨기기)
        $('.lang').toggle();
    });

    $('.gnb > li').mouseenter(function(){
        $('.lnb').stop().slideUp();
        $(this).children().stop().slideDown();
    })
    $('.gnb > li').mouseleave(function(){
        $('.lnb').stop().slideUp();
    })
    $('.gnb .lnb').mouseleave(function(){
        $('.lnb').stop().slideUp();
    });
    $('section5 li').length
});