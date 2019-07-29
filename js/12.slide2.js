{/* <li class="slide"><img src="../img/p1.png" alt="배너1" class="w-100"></li>
				<li class="slide"><img src="../img/p2.png" alt="배너2" class="w-100"></li>
				<li class="slide"><img src="../img/p3.png" alt="배너3" class="w-100"></li>
				<li class="slide"><img src="../img/p4.png" alt="배너4" class="w-100"></li>
				<li class="slide"><img src="../img/p5.png" alt="배너5" class="w-100"></li>
				<li class="slide"><img src="../img/p1.png" alt="배너1" class="w-100"></li> */}

var slides = [
{"src":"../img/p1.png","link":"#"},
{"src":"../img/p2.png", "link":"#"},
{"src":"../img/p3.png", "link":"#"},
{"src":"../img/p4.png", "link":"#"},
{"src":"../img/p5.png", "link":"#"},
{"src":"../img/p1.png", "link":"#"}
]; 

var slide =[];
var Interval;
var gap=3000;
var speed=500;
var now =1;
//초기화
for(var i in slides) {
	//$(".slides").append()
	$slide[i] = $('<div class="slide"><img src="'+slides[i].src+'" class="w-100"></div>').appendTo(".slides")
	$slide[i].css({"left":(i*100)+"%"})
}
//반복, 움직임
interavl=setInterval(function(){
	$(".slides").stop().animate({"left":(-now*100)+"%"},speed,function(){
		if(now ==$slide.length-1){
			$(this).css({"left":"0"});
			now=1;
		}
		else now++;
	});
},gap);