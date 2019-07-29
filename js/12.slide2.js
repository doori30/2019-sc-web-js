/*   <li class="slide"><img src="../img/p1.png" alt="배너1" class="w-100"></li>
				<li class="slide"><img src="../img/p2.png" alt="배너2" class="w-100"></li>
				<li class="slide"><img src="../img/p3.png" alt="배너3" class="w-100"></li>
				<li class="slide"><img src="../img/p4.png" alt="배너4" class="w-100"></li>
				<li class="slide"><img src="../img/p5.png" alt="배너5" class="w-100"></li>
				<li class="slide"><img src="../img/p1.png" alt="배너1" class="w-100"></li>  */

var slides = [
{"src":"../img/p1.png","link":"#"},//0
{"src":"../img/p2.png", "link":"#"},//1
{"src":"../img/p3.png", "link":"#"},//2
{"src":"../img/p4.png", "link":"#"},//3
{"src":"../img/p5.png", "link":"#"},//4
{"src":"../img/p1.png", "link":"#"}//덤
]; 


var Interval;
var gap=3000; //3초에 한번씩 애니메이션 실행
var speed=500; //애니메이션 속도가 0.5s
var now =1;    //현재0번에서 다음 1번으로 이동시키려함.
               //넘버가 4로 넣게 되면 시작하고 바로 4로 넘어감.
var $slide = []; // class=slides를 생성할 slide를 담을 배열변수.저장할 공간

//초기화
for(var i in slides) {
	//    0번 데이타에 있는 src
	//$(".slides").append()
	//$가 앞에 붙은 $슬라이드로 리턴함.
	$slide[i] = $('<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>').appendTo('.slides');//0번데이타
	$slide[i].css({"left":(i*100)+"%"});
	if(i==0) $(".pager").append('<li class="cir-sel"></li>');
	else if(i < slides.length-1)
	$(".pager").append('<li class="cir"></li>');
	//if가 0이면 cir-sel을 붙이고 100%를 생성.
	//if가 0이 아니면 5보다 작으면 cir을 생성
	//if가 5보다 작지 않으면 if와 else if가 적합하지 않아 작업하지 않음.
}
//$(".pager > li").eq(0).removeClass("cir").addClass("cir-sel");

//반복, 움직임
interavl=setInterval(function(){
	$(".slides").stop().animate({"left":(-now*100)+"%"},speed,function(){
		$(".pager > li").removeClass("cir-sel").addClass("cir");
		//모든 페이저가 cir로 보여줌
		if(now == $slide.length-1){
			$(this).css({"left":0});
			$(".pager > li").eq(0).removeClass("cir").addClass("cir-sel");
			now=1;
		}//now-1일 때, 슬라이드5와 같지 않으므로 else로 내려감.
		 //now가 5일 때, if문 밑에 내용을 실행.
		else {
			$(".pager > li").eq(now).removeClass("cir").addClass("cir-sel");
			now++;
		}//now=5 fake->left0으로 바꿔주고 다시 1부터 시작함.
	});
},gap);//gap(3초)시간만큼 interval작업함.

