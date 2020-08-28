
        $(".dropdown-pc .default").click(function(){
            $(this).toggleClass("open");
            $(".dropdown-pc .list").slideToggle();
            return false;
        });

    
$(".gnb .d1").mouseover(function(){
    var i= $(this).index();
     if(i==3){
        $(".gnb-sub").css({
            height:700
        })
    }else{
        $(".gnb-sub").css({
            height:500
        })
    }
    $(this).find(".gnb-sub").stop().slideDown();
   
}).mouseout(function(){
     $(this).find(".gnb-sub").stop().slideUp();
    
    
});
        var slideimg = $(".slide-imgin li");
        var slidepager= $(".pager p");
        var slidenext = $(".a004-btn .next");
        var slideprev = $(".a004-btn .prev");
        var current =0;
        
        //슬라이드 기본셋팅
        
        slideimg.css({
            position :
            "absolute",
            top:0,
            left:"100%"
        });
        slideimg.eq(0).css({
            left:0
        });


        slidepager.on({
            click: function(){
                var i=$(this).index();
                slidepager.removeClass("on");
                $(this).addClass("on");
                if(i > current) movetoleft(i);
                if(i < current) movetoright(i);
                return false;
            }
        })
        
       slidenext.on({
            click: function(){
                var n=current+1;
                
                slidepager.eq(n).click();
                return false;
            }
        });
        
        slideprev.on({
            click: function(){
                var n=current-1;
                if(n < 0) return false;
                slidepager.eq(n).click();
                return false;
            }
        });
        

        
        function movetoleft(i){
            var currentimg = slideimg.eq(current);
            var nextimg = slideimg.eq(i);
            
            currentimg.stop().animate({
                left: "-100%"
            });
            nextimg.css({left:"100%"}).stop().animate({left:0});
            current= i;
        };

        function movetoright(i){
            var currentimg = slideimg.eq(current);
            var nextimg = slideimg.eq(i);
            
            currentimg.stop().animate({
                left: "100%"
            });
            nextimg.css({left:"-100%"}).stop().animate({left:0});
            current= i;
        };     //pc

        $(".footer-search .btn").click(function(){
            $(this).toggleClass("on");
            $(".footer-search .list").slideToggle();
            return  false;
        })

        $(".m_btn").click(function(){
            $(".m_btn-slide").animate({
                width: "100%"
            });
            return false;
        });

        $(".m-dbtn p").click(function(){
            $(this).toggleClass("on");
            $(".m-dlist").stop().slideToggle();
        })
        $(".m-dbtn a").click(function(){
            $(this).toggleClass("open");
            $(".m-dlist").slideToggle();
            return false;
        })


        $(".mo-gnb .d1 .main").click(function(){
            var a =$(this).siblings(".sub").css("display");
            if(a == "block"){
                $(".mo-gnb .d1 .sub").stop().slideUp();
            $(".mo-gnb .d1 .main").removeClass("on");
            } else {
            
            $(".mo-gnb .d1 .sub").stop().slideUp();
            $(".mo-gnb .d1 .main").removeClass("on");
            $(this).addClass("on");
            $(this).siblings(".sub").slideDown();
            }
            return false;
        })


        $(".open-menu").click(function(){
            $(".blackBg").fadeIn();
           $(".slide").animate({
              right: 0 
           });
            return false;
        });
        /*모바일 사이드 닫기*/
        $(".close-menu").click(function(){
           $(".blackBg").css({
               display: "none"
           })
           $(".slide").css({
              right: "-100%" 
           });
            return false;
        });
         $(".blackBg").click(function(){
             $(".slide .close-menu").click();
         })
       /* $(".gnb .d1 .main").click(function(){
            //이미 열린 메뉴는 여기서 명령종료
            //이미 열린 메뉴의 서브는 화면에 보이는상태임
            //그래서 .d2의 display 속성값을 저장해 if 조건문으로 비교

            var a = $(this).siblings(".d2").css("display");
            if(a == "block"){
                return false;
            };
                        //전체 .d2를 선택해 닫기
            $(".gnb .d1 .d2").slideUp();
            $(".gnb .d1 .main").removeClass("on");
            $(this).addClass("on")

            //현재 클릭 한 대상의 형제관계로  작성 된 .d2를찾음
            $(this).siblings(".d2").slideDown();

            return false;
        })*/
       /* var slideimg1 = $(".slide-img li");
        var slidepager1= $(".pager p");
        var slidenext1 = $(".a004-btn .next");
        var slideprev1 = $(".a004-btn .prev");
        var current1 =0;
        
        //슬라이드 기본셋팅
        
        slideimg1.css({
            position :
            "absolute",
            top:0,
            left:"100%"
        });
        slideimg1.eq(0).css({
            left:0
        });


        slidepager1.on({
            click: function(){
                var i=$(this).index();
                slidepager.removeClass("on");
                $(this).addClass("on");
                if(i > current) movetoleft(i);
                if(i < current) movetoright(i);
                return false;
            }
        })
        
       slidenext1.on({
            click: function(){
                var n=current+1;
                
                slidepager.eq(n).click();
                return false;
            }
        });
        
        slideprev1.on({
            click: function(){
                var n=current-1;
                if(n < 0) return false;
                slidepager.eq(n).click();
                return false;
            }
        });
        

        
        function movetoleft(i){
            var currentimg = slideimg1.eq(current);
            var nextimg = slideimg1.eq(i);
            
            currentimg.stop().animate({
                left: "-100%"
            });
            nextimg.css({left:"100%"}).stop().animate({left:0});
            current= i;
        };

        function movetoright(i){
            var currentimg = slideimg1.eq(current);
            var nextimg = slideimg1.eq(i);
            
            currentimg.stop().animate({
                left: "100%"
            });
            nextimg.css({left:"-100%"}).stop().animate({left:0});
            current= i;
        };      */