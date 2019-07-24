//.thumb 안에 있는 img를 click하면 this의 src를 .pic안에 있는 img의 src로
//바꾼다.
//var-src = $(객체).attr("src")     =>객체의 속성중 src값을 가져온다.
//$(객체).attr("src","이미지 경로") =>객체의 crs 값을 새로운 값으로 바꾼다.
//$(객체).trigger("click"이벤트를 댕겨줌.)=>객체의 이벤트를 실행시켜줌.
 $(".thumb img").click(function(){
	var src = $(this).attr("src");
	$(".pic img").css("opacity", 0);
	$(".pic img").attr("src",src);
	$(".pic img").stop().animate({"opacity": 1},500);
});
//$(".pic img").css("opacity": 0).attr("src",src);.stop().animate({"opacity": 1},500);
$(".thumb img").eq(0).trigger("click");

$(".thumb img").click(function(){
var src =	$(this).attr("src")
	$(".pic img").attr("src",src)
	$(".pic img").trigger("click")
});
$(".thumb img").eq(3).trigger("click");