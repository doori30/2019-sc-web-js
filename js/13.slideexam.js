var slides=[
{"src":"../img/p1.png","link":"#"},//0
{"src":"../img/p2.png", "link":"#"},//1
{"src":"../img/p3.png", "link":"#"},//2
{"src":"../img/p4.png", "link":"#"},//3
{"src":"../img/p5.png", "link":"#"},//4
];

(function(){
//전역함수
var interval;
var speed=500;
var gap=3000;
var html;
var now=1;

//초기화
for(var i in slides){
	html='<li class="slide"><img src="'+slides[i].src+'" class="w-100"></li>'
	$(".slides").append(html);
	if(i == 0) $(".pager").append('<li class="cir-sel"></li>');
	else $(".pager").append('<li class="cir"></li>');
}
$(".slides").append($(".slides>.slide").eq(0).clone());



}());