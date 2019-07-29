/*
setInterval(함수,지연시간) => 지연시간마다 함수를 실행한다.(반복)
 var i = 0;
var interval = setInterval(function(){
	console.log(i++);
},1000); 
clearsetInterval(interval)->setInterval삭제하기.(자바스크립트)
i++ =>후위 연산자 (적용하고 +1을 더함.  0,+1)
++i =>전위 연산자 (+1을 더하고 적용한다. 0+1)
여러 함수에서 같이 쓰이는 변수는 전역변수로 선언한다.
*/
//<li class="list-group-item ">Text</li>
var interval;

$("#btStart").click(function () {
	/* var interval = setInterval(function () {
		$("#stage").append('<li>' + (i++) + '</li>')
	}, 1000); */
	var i = 0;
	clearInterval(interval);
	//시작을 누르면 앞에 작업을 clear시켜주고 다시 1부터 진행
	interval = setInterval(function(){
		$("#stage").append('<li class="list-group-item">'+(++i)+'</li>')                                   //i++로 사용할 경우 변수var i=1로 해야 시작이 1부터 작업된다.
	},1000);
});

$("#btEnd").click(function () {
	clearInterval(interval);
});

$("#btReset").click(function () {
	clearInterval(interval);
	$("#stage").empty();
});

//정해진 시간마다 페이지를 refresh
/* var intervalRefresh =setInterval(function(){
	location.reload();
},5000); */

/* .banner1*/
var i=1;
var ban1 = setInterval(function(){
	$(".banner1>.slides").stop().animate({"left":(-i*100)+"%"},500, function(){
		if(i==4) i =0;
		else i++;
	});
},3000);

/* .banner2*/
var i2 = 1;
var ban2 = setInterval(function(){
	$(".banner2>.slides").stop().animate({"left":(-i2*100)+"%"},function(){
		if(i2==5) {
			$(this).css({"left":0});
			i2 = 1;
		}
		else i2++;
	});
},3000);

/* .banner3*/
var i3=1;
var ban3 =setInterval(function(){
	$(".banner3 .slides").stop().animate({"top":-(i3*100)+"%"})
	if (i3==4) i3=0;
	else i3++;
}, 3000);

/* .banner4*/
var i4=1;
var ban4 =setInterval(function(){
	$(".banner4 .slides").stop().animate({"top":-(i4*100)+"%"},500,function(){
		if(i4==5){
			$(this).css({"top":0});
			i4=1;
		}
			else i4++;
	});	
},3000);

/* .banner5 */
var i5 = 0;
var depth =10; //z-index값
var ban5 =setInterval(function(){
	$(".banner5 .slide").eq(i5).css({"z-index":depth++,"opacity":0})
	.stop().animate({"opacity":1},500,function(){
		if (i5==4) i5=0;
		else i5++;
	})
},3000);