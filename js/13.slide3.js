var slides = [
	{src: "../img/banner3/prd1.png"},
	{src: "../img/banner3/prd2.png"},
	{src: "../img/banner3/prd3.png"},
	{src: "../img/banner3/prd4.png"},
	{src: "../img/banner3/prd5.png"},
	{src: "../img/banner3/prd6.png"},
	{src: "../img/banner3/prd7.png"},
	{src: "../img/banner3/prd8.png"},
	{src: "../img/banner3/prd9.png"}
];

var now = 0;														// 맨 처음 .slide의 index
var end = slides.length - 1;						// 마지막 .slide의 index
var dir = "R";													// 움직이는 방향 L / R
var tar; 																// 움직임 목표값 L:-50% / R:0
var cnt = 4;														// 화면에 보여지는 갯수
var slideCnt = cnt + 2;									// li.slide의 갯수
var slideWid = (100/cnt).toFixed(4); 		// .slide의 width를 소수점 5자리까지..
var speed = 500;
var gap = 3000;
var arr = [];
var interval;

init();		// 최초 1번 실행 - 이미지가 들어갈 빈 li를 생성한다.
function init() {
	for(var i=0, html=''; i<slideCnt; i++) {
		html += '<li class="slide p-2" style="flex: '+slideWid+'% 0 0;">';
		html += '<img src="" class="w-100">';
		html += '</li>';
	}
	$(".slides").html(html);
}


slideInit();	// 애니메이션이 끝난 후 이미지 배치 재조정
function slideInit() {
	// 6개의 칸에 들어갈 index 계산
	if(now == 0) arr[0] = end;
	else arr[0] = now - 1;
	for(var i=0; i<=cnt; i++) {
		if(now + i > end) arr[(i+1)] = i + now - end - 1;
		else arr[(i+1)] = now + i;
	}
	console.log(arr);
	for(var i=0; i<slideCnt; i++) {
		$(".slide").eq(i).find("img").attr("src", slides[arr[i]].src);
	}
	$(".slides").css({"left": -slideWid+"%"});
	if(dir == "L") {
		if(now == end) now = 0;
		else now++;
	}
	else {
		if(now == 0) now = end;
		else now--;
	}
}

function slideAni() {
	if(dir == "L") tar = -2*slideWid + "%";
	else tar = 0;
	$(".slides").stop().animate({"left": tar}, speed, slideInit);
}

interval = setInterval(slideAni, gap);


