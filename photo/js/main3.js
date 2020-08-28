/*
	$("#pullpage-box").fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});*/
/*    window.onload = function(){
        var canvas = document.getElementById("canvas");
        if(canvas.getContext){
            var draw = canvas.getContext("2d");
            
            var img = new Image();
            img.src = "../img/photo-1450849608880-6f787542c88a.jpg";
            img.onload = function(){
                //이미지의 원하는 부분만 잘라서 그리기
                //drawImage(이미지객체, 
                //        이미지의 왼위 부분x, 이미지의 왼위 부분y, 이미지의 원하는 가로크기, 이미지의 원하는 세로크기,
                //        사각형 부분x, 사각형 부분y, 가로크기, 세로크기)
                //draw.drawImage(img, 100,100, 300,300, 50,50, 250,300);
                
                //전체 이미지 그리기
                //drawImage(이미지객체, 사각형 왼위 x, 사각형 왼위 y, 가로크기, 세로크기)
                draw.drawImage(img, 50,50, 250,300);
            };
        }
    };*/
$(window).scroll(function(){
  var s=$(window).scrollTop();
  var i =$("#ground").offset().top;
if(s>=i){
    $(".box").addClass("on");
}else{
    $(".box").removeClass("on");
}
  
});
$(window).scroll(function(){
  var s=$(window).scrollTop();
      var i =$(".p-list1").offset().top;
if(s>=i){
    $(".box").addClass("on1");
}else{
    $(".box").removeClass("on1");
}
  
});
$(window).scroll(function(){
  var s=$(window).scrollTop();
    var i =$(".content-i").offset().top;
if(s>=i){
    $("#wrap").addClass("on");
}else{
    $("#wrap").removeClass("on");
}
  
});
$(window).scroll(function(){
  var s=$(window).scrollTop();
    var i=$("#section5").offset().top+800;
if(s>=i){
    $("#wrap").addClass("on1");
}else{
    $("#wrap").removeClass("on1");
}
  
});
$(window).scroll(function(){
  var s=$(window).scrollTop();
    var i=$(".vi-s").offset().top;
if(s>=i){
    $("#wrap").addClass("on2");
}else{
    $("#wrap").removeClass("on2");
}
  
});

$(window).scroll(function(){
    var s=$(window).scrollTop();
    var i=$(".endin").offset().top;
    if(s>=i){
        
        $("#wrap").addClass("on3");
    }else{
        $("#wrap").removeClass("on3");
    }
});

/*$(window).scroll(function(){
    var s=$(window).scrolltop();
    var i=$(".slick-list").offset().top;
    if(s >= i){
        $(".ending").addClass("on3");
    }else{
        $(".ending").removeClass("on3");
    }
})*/
/*$(window).scroll(function(){
    var s=$(document).scrollTop();
    log(s);
})*/
/*function log(str){
    $("#log").text(str);
} 실시간 height*/
    AOS.init();


var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const boxes=[];
let box;

class Box{
    constructor(index,x,y,speed){
        //생성자
        this.index=index;
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.width=100;
        this.height=100;
        this.draw();
        this.draw1();
    }
 draw(){
        context.fillStyle="rgba(255,255,255,0.5)";//상자색깔
        context.fillRect(this.x ,this.y, 2,1); //상자크기
        context.font = "48px Orbitron";
        context.fillText("My own Story",900,650);
    }
     draw1(){
        context.fillStyle="rgba(255,255,255,0.5)";//상자색깔
        context.fillRect(this.x ,this.y, 4,4); //상자크기
        context.font = "48px Orbitron";
        context.fillText("My own Story",900,650);
    }

    
}
function render(){
    context.clearRect(0,0,canvas.width, canvas.height);
    let box;
    
    for(let i =0;i< boxes.length; i++){
        box=boxes[i];
        box.x+=box.speed;
        box.y+=box.speed;
        if(box.x> canvas.width){
            box.x= -box.width;
        }
        if(box.y > canvas.height){
            box.y= -box.height;
        }
        box.draw();
    }
    requestAnimationFrame(render);
}
let temX, temY ,temspeed;
for(let i=0; i<1000; i++) { //랜덤으로 1000개의 상자 생성
    temX = Math.random() *canvas.width;
    temY = Math.random() *canvas.height;
    temspeed = Math.random()*0.2+0.2;
    boxes.push(new Box(i,temX,temY ,temspeed));
    
}

render();


$("#section10").slick({
    autoplay:false,
    arrows:false,
});

 $(".line-1").hide();

        $(".click").click(function(){
                $(".anim-typewriter").css({
                    animation: "typewriter 4s steps(44) 1s 1 normal both, blinkTextCursor 500ms steps(44) infinite normal" 
                })
            $(".line-1").show();
        })


    $("#reset").click(function () {
        $(".anim-typewriter").each(function () {
            $(".anim-typewriter").css({
                display:"none"
            });
        });
    });

/*function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass("animated " + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass("animated " + animation);
      }, 2000);
    }
  );
}; */
$(document).ready(function(){
		
$('.bt').on('click',function(){
			
   $('.cont-su1').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
		   $(this).removeClass('animated swing');		
		   });			
   });

});

//c
const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI * 0.5;

// canvas settings
var viewWidth = 490,
    viewHeight = 355,
    drawingCanvas = document.getElementById("mycanvas"),
    ctx,
    timeStep = (1/60);

Point = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Particle = function(p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.time = 0;
    this.duration = 3 + Math.random() * 2;
    this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);

    this.w = 8;
    this.h = 6;

    this.complete = false;
};

Particle.prototype = {
    update:function() {
        this.time = Math.min(this.duration, this.time + timeStep);

        var f = Ease.outCubic(this.time, 0, 1, this.duration);
        var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

        var dx = p.x - this.x;
        var dy = p.y - this.y;

        this.r =  Math.atan2(dy, dx) + HALF_PI;
        this.sy = Math.sin(Math.PI * f * 10);
        this.x = p.x;
        this.y = p.y;

        this.complete = this.time === this.duration;
    },
    draw:function() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.r);
        ctx.scale(1, this.sy);

        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

        ctx.restore();
    }
};

Loader = function(x, y) {
    this.x = x;
    this.y = y;

    this.r = 24;
    this._progress = 0;

    this.complete = false;
};

Loader.prototype = {
    reset:function() {
        this._progress = 0;
        this.complete = false;
    },
    set progress(p) {
        this._progress = p < 0 ? 0 : (p > 1 ? 1 : p);

        this.complete = this._progress === 1;
    },
    get progress() {
        return this._progress;
    },
    draw:function() {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        ctx.fill();
    }
};

// pun intended
Exploader = function(x, y) {
    this.x = x;
    this.y = y;

    this.startRadius = 24;

    this.time = 0;
    this.duration = 0.4;
    this.progress = 0;

    this.complete = false;
};

Exploader.prototype = {
    reset:function() {
        this.time = 0;
        this.progress = 0;
        this.complete = false;
    },
    update:function() {
        this.time = Math.min(this.duration, this.time + timeStep);
        this.progress = Ease.inBack(this.time, 0, 1, this.duration);

        this.complete = this.time === this.duration;
    },
    draw:function() {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
        ctx.fill();
    }
};

var particles = [],
    loader,
    exploader,
    phase = 0;

function initDrawingCanvas() {
    drawingCanvas.width = viewWidth;
    drawingCanvas.height = viewHeight;
    ctx = drawingCanvas.getContext('2d');

    createLoader();
    createExploader();
    createParticles();
}

function createLoader() { //검은원 로딩
    loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
}

function createExploader() {
    exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
}

function createParticles() { //상자 갯수 FOR문 
    for (var i = 0; i < 128; i++) {
        var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
        var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
        var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
        var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);

        particles.push(new Particle(p0, p1, p2, p3));
    }
}

function update() {

    switch (phase) {
        case 0:
            loader.progress += (1/45);
            break;
        case 1:
            exploader.update();
            break;
        case 2:
            particles.forEach(function(p) {
                p.update();
            });
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    switch (phase) {
        case 0:
            loader.draw();
            break;
        case 1:
            exploader.draw();
            break;
        case 2:
            particles.forEach(function(p) {
                p.draw();
            });
        break;
    }
}

window.onload = function() {
    initDrawingCanvas();
    requestAnimationFrame(loop);
};

function loop() {
    update();
    draw();

    if (phase === 0 && loader.complete) {
        phase = 1;
    }
    else if (phase === 1 && exploader.complete) {
        phase = 2;
    }
    else if (phase === 2 && checkParticlesComplete()) {
        // reset
        phase = 0;
        loader.reset();
        exploader.reset();
        particles.length = 0;
        createParticles();
    }

    requestAnimationFrame(loop);
}

function checkParticlesComplete() {
    for (var i = 0; i < particles.length; i++) {
        if (particles[i].complete === false) return false;
    }
    return true;
}

// math and stuff

/**
 * easing equations from http://gizma.com/easing/
 * t = current time
 * b = start value
 * c = delta value
 * d = duration
 */
var Ease = {
    inCubic:function (t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
    },
    outCubic:function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    },
    inOutCubic:function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    },
    inBack: function (t, b, c, d, s) {
        s = s || 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    }
};

function cubeBezier(p0, c0, c1, p1, t) {
    var p = new Point();
    var nt = (1 - t);

    p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
    p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

    return p;
}
jQuery(document).ready(function() {
                $('#myModal').show();
        });
        //팝업 Close 기능
        function close_pop(flag) {
             $('#myModal').hide();
        };

