
	$("#container").fullpage({
		//options here
        scrollHorizontally: false,
        scrollingSpeed: 1200,

	});

$(".Modern-Slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: "<p class='prev'><a href='#'>이전으로</a></p>",
    nextArrow: "<p class='next'><a href='#'>다음으로</a></p>"

});
$(".gnb .d1 .main").click(function () {

    var a = $(this).siblings(".sub").css("display");
    if (a == "block") {
        $(".gnb .d1 .sub").slideUp();
        $(this).removeClass("on");
    }
    if (a == "none") {
        $(".gnb .d1 .sub").slideUp();
        var a = $(this).siblings(".sub").slideDown();  
        $(".gnb .d1 .main").removeClass("on");
        $(this).addClass("on"); 
    }

});


$(".dropdown-pc .default").click(function () {
    $(this).toggleClass("open");
    $(".dropdown-pc .list").slideToggle();
    return false;
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    dots : true,
    autoplay: true,
    customPaging : function(){
    return "<span></span>"
    },
    prevArrow: "<p class='prev1'>이전으로</a></p>",
    nextArrow: "<p class='next1'>다음으로</a></p>",
    
});

$(".f-dropdown-pc .default").click(function(){
    $(this).toggleClass("open");
    $(".f-dropdown-pc .f-list").slideToggle();
    
    return false;
})


