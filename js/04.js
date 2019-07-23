/* $(".fa-bars").mouseenter(function () {
	$(this).css({
		"color": "#333"
	});
	$(this).prev().stop().animate({
		"width": "90px",
		"height": "90px"
	}, 300, function () {
		$(this).stop().animate({
			"height": "100%"
		}, 150, function () {
			$(this).stop().animate({
				"width":"100%"
			}, 300, function(){
			  $(".fa-bars").off("mouseleave");
				$(".fa-bars").hide();
				$(".fa-times").show();
			});
		});
	});
}); */
/* 클릭 */
$(".fa-bars").click(function(){
$(this).css({
"color":"#333"
});
$(".fa-bars").off("mouseleave");
$(this).prev().stop().animate({
	"width":"100%",
	"height":"100%"
},300, function(){
	
	$(".fa-bars").hide();
	$(".fa-times").show()
});
});
// $(".fa-bars").on("mouseleave",leaveFn);
$(".fa-times").on("click",leaveFn);
function leaveFn(){
$(".fa-bars").css({
	"color":"#f8f8f8"
});
$(".navi-bg").stop().animate({
	"width":0,
	"height":0,
},200,
function(){
$(".fa-bars").show();
$(".fa-times").hide();
$(".fa-bars").on("mouseleave",leaveFn);
});
};