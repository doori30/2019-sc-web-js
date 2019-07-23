$(".navi-bg").mouseenter(function(e){
	e.stopPropagation();
$(this).stop().animate({
	"width":"90px",
	"height":"90px"
},300);
});

$(".navi-bg").mouseleave(function(e){
	e.stopPropagation();
	$(this).stop().animate({
"width":0,
"height":0
},300);
});