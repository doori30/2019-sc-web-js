/*   <li class="slide"><img src="../img/p1.png" alt="배너1" class="w-100"></li>
				<li class="slide"><img src="../img/p2.png" alt="배너2" class="w-100"></li>
				<li class="slide"><img src="../img/p3.png" alt="배너3" class="w-100"></li>
				<li class="slide"><img src="../img/p4.png" alt="배너4" class="w-100"></li>
				<li class="slide"><img src="../img/p5.png" alt="배너5" class="w-100"></li>
				<li class="slide"><img src="../img/p1.png" alt="배너1" class="w-100"></li>  */

	//IIFE(선언과 동시에 즉시 실행 함수.)
	(function test(){
		console.log("함수실행");
	})();			

var slides = [
{"src":"../img/p1.png","link":"#"},//0
{"src":"../img/p2.png", "link":"#"},//1
{"src":"../img/p3.png", "link":"#"},//2
{"src":"../img/p4.png", "link":"#"},//3
{"src":"../img/p5.png", "link":"#"},//4
//덤{"src":"../img/p1.png", "link":"#"}
]; 

//가로 슬라이드
/* 1번 banner */
(function(){
	var interval;
	var gap=3000; //3초에 한번씩 애니메이션 실행
	var speed=500; //애니메이션 속도가 0.5s
	var now =1;    //현재0번에서 다음 1번으로 이동시키려함.
								//넘버가 4로 넣게 되면 시작하고 바로 4로 넘어감.
	// var $slide = []; // class=slides를 생성할 slide를 담을 배열변수.저장할 공간
	var html;

	//초기화
	for(var i in slides) {
		//    0번 데이타에 있는 src
		html='<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>';
		/* $slide[i] = $('<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>').appendTo('.slides');//0번데이타
		$slide[i].css({"left":(i*100)+"%"}); 
		//$(".slides").append()
		//$가 앞에 붙은 $슬라이드로 리턴함.*/
		$(".slides").append(html);	
	}
	$(".slides").append($(".slides > .slide").eq(0).clone());
	//slides안에 있는 slide에 있는 0번째 복사해서 붙여주세요.
	
	$(".slides > .slide").each(function(i){
		$(this).css({"left":(i*100)+"%"});//상단 숨긴문장을 여기서 명령함.
		if(i==0) $(".pager1").append('<li class="cir-sel"></li>');
		else if(i < slides.length)
		$(".pager1").append('<li class="cir"></li>');
		//if가 0이면 cir-sel을 붙이고 100%를 생성.
		//if가 0이 아니면 5보다 작으면 cir을 생성
		//else if(i < slides.length-1)
		//if가 5보다 작지 않으면 if와 else if가 적합하지 않아 작업하지 않음.
	});
	//jQuery반복문.슬라이드 갯수만큼 반복이 실행됨.

	/* 
	반복문-Javascript
	for(var i=0; i<10; i++){}
	for(var i in the Array){}

	반복문 jQuery
	$(객체가 여러개 일 때,).each(function(index값을 준다고 해서 i로 대체적으로 표기를 함.))
	*/

	//$(".pager > li").eq(0).removeClass("cir").addClass("cir-sel");


	//반복, 움직임
	//        slideShow라는 함수이름...선언과 동시에 실행 되지 않는다.
	function slideShow(){
		$(".slides").stop().animate({"left":(-now*100)+"%"},speed,function(){
			$(".pager1 > li").removeClass("cir-sel").addClass("cir");
			//모든 페이저가 cir로 보여줌
			if(now == slides.length){
				$(this).css({"left":0});
				$(".pager1 > li").eq(0).removeClass("cir").addClass("cir-sel");
				now=1;
			}//now-1일 때, 슬라이드5와 같지 않으므로 else로 내려감.
			//now가 5일 때, if문 밑에 내용을 실행.
			else {
				$(".pager1 > li").eq(now).removeClass("cir").addClass("cir-sel");
				now++;
			}//now=5 fake->left0으로 바꿔주고 다시 1부터 시작함.
		});
	}
	interval = setInterval(slideShow,gap);//gap(3초)시간만큼 interval작업함.

	/* 
	EVENT
	-마우스를 배너에 올리면 배너의 setInterval이 멈춘다.
	마우스를 내리면 다시 setInterval을 작동하다.
	stop()pause()play()처럼 정지하는 동작이 없어서
	명령으로 없애야함.
	*/

	$(".slides").mouseenter(function(){
		clearInterval(interval);
	});

	$(".slides").mouseleave(function(){
		interval=setInterval(slideShow,gap);
	});

	/*
	EVENT
	-pager >li를 클릭하면 원하는 페이지로 이동한다. 
	*/
	$(".pager1 > li").click(function(){
		now =$(this).index();
		slideShow();
	});

}());



// 페이드 슬라이드
/* 2번 banner */
(function(){
	//전역변수
	var interval;
	var speed = 500;
	var gap = 3000;
	var depth = 10;
	var html;
	var now = 1;
	var $slide;

	//초기화
	init();
	function init(){
		for(var i in slides){
			html ='<li class="slide"><img src="'+slides[i].src+'"class="w-100"></li>'
			$(".slides2").append(html);
		}
			$(".slides2 > .slide").each(function(i){
				if(i==0){
				$(".pager2").append('<li class="cir-sel"></li>');
					$(this).css({"z-index":depth++});
					//i가 0이라면 pager2는 cir-sel을 만들고 
					//이것이 z-index값을 플러스 한다.
				}
				else $(".pager2").append('<li class="cir"></li>');
		});
				$slide = $(".slides2 > .slide");
	}


	//반복 동작함수
	function slideShow(){
	$slide.eq(now).css({"z-index":depth++,"opacity":0});
	$slide.eq(now).stop().animate({"opacity":1},speed,function(){
		$(".pager2 > li").removeClass("cir-sel").addClass("cir");
		$(".pager2 > li").eq(now).removeClass("cir").addClass("cir-sel");
		                     //여기서는 .을 찍지않음
		if(now == slides.length-1) now=0;
		else now++;
	});
	}
interval =setInterval(slideShow, gap);

//EVENT
$(".slides2").mouseenter(function(){
	clearInterval(interval);
});

$(".slides2").mouseleave(function(){
	interval =setInterval(slideShow, gap);
});

$(".pager2 > li").click(function(){
	now =$(this).index();
	slideShow();
});

}());


//세로 슬라이드
(function(){
//전역함수
var interval;
var speed = 500;
var gap = 3000;
var now =1;
var html;

//초기화
for(var i in slides){
	html='<li class="slide"><img src="'+slides[i].src+'" clsaa="w-100"></li>';
	$(".slides3").append(html);
}
$(".slides3").append($(".slide").eq(0).clone());
$(".slides").each(function(i){
	$(this).css({"top":(i*100)+"%"});
	if(i==0) $(".pager3").append('<li clsaa="cir-sel"></li>');
	else if (i < slides.length-1)
	$(".pager3").append('<li clsaa="cir"></li>');
	})
	


}());