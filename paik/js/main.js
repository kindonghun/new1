$(".open-menu").click(function(){
    $("#sidel").animate({
        right:0
    });
    $("body").css({
        overflow: "hidden"
    })
    return false;
})
$("#sidel .close-menu").click(function(){
    $("#sidel").animate({
        right:"-100%"
    });
    $("body").css({
        overflow: "visible"
    })
    return false;
})

$(".u-open-menu").click(function(){
    $("#sidel").animate({
        right:0
    });
    $("body").css({
        overflow: "hidden"
    })
    return false;
})

$(".hist-img").slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:3000,
    speed: 1200,
    prevArrow: "<p class='prev'>이전으로</p>",
    nextArrow: "<p class='next'>다음으로</p>",
});

$(".pc-gnb").mouseover(function(){
    $(".pc-gnb").stop().animate({
        height:400
    })
    $(".subBg").stop().slideDown(400);
}).mouseout(function(){
    $(".pc-gnb").stop().animate({
        height:40
    })
    $(".subBg").stop().slideUp(400);
})

$(".btn-lang").click(function(){
    $(this).toggleClass("on");
    $(".btn-lang-open").stop().slideToggle();
    return false;
})

$(".m-s01-notice").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:5000,
    Speed:1300
});

$(".pc-banner").slick({
    arrows:false,
    dots:true,
    autoplay :true,
    autoplaySpeed:5000,
    Speed:1300,
});

$(window).scroll(function(){
    var i =$(window).scrollTop();
    var back =$(".pc-banner").offset().top;
    if(i >=back){
        $(".back-historyin").addClass("on");
    }else{
        $(".back-historyin").removeClass("on");
    }
})

        $(".sideMenu .d1 .main").click(function(){
            //변수 a를 만들어 저장함 무엇을?
           
           var a =$(this).siblings(".sub").css("display"); //현재클릭한 
            if(a=="block"){
                $(".sideMenu .d1 .sub").slideUp();//서브메뉴닫기
                $(this).removeClass("on"); //메인메뉴 스타일리셋
            }
            if(a=="none"){
                $(".sideMenu .d1 .sub").slideUp(); //서브메뉴 전체닫기
                var a =$(this).siblings(".sub").slideDown(); //현재클릭한 .main 의 형제관계인 .d2만열기
                $(".sideMenu .d1 .main").removeClass("on"); //전체메인메뉴 스타일 리셋
                $(this).addClass("on");//현재 클릭한 메인메뉴 스타일만 변경하기
            }
            
        });

