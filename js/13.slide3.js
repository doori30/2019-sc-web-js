var slides = [
	{src:"../img/banner3/prd1.png"},
	{src:"../img/banner3/prd2.png"},
	{src:"../img/banner3/prd3.png"},
	{src:"../img/banner3/prd4.png"},
	{src:"../img/banner3/prd5.png"},
	{src:"../img/banner3/prd6.png"},
	{src:"../img/banner3/prd7.png"},
	{src:"../img/banner3/prd8.png"},
];

var now =0;  //맨처음 slide의 Index
var end = sliudes.length-1; //마지막 .slide Index
var dir ="L"; //움직이는 방향 L="-50%" R="0"
var tar ="-50%"; //움직임 목표값 L="-50%" R="0"
var speed ="500";
var gap = "3000"
/* <li class="slide p-2" style="flex: 25% 0 0;">
			<img src="../img/banner3/prd1.png" class="w-100">
		</li> */
		init();
		function init(){
			for(var i =0 ; i<6; i++){
				html = '<li class="slide p-2" style="flex: 25% 0 0;">';
				html += '<img src="" class="w-100">';
				html += '</li>';
			}
			$(".slides").html(html);
		}
		function slidesAni(){
			if(dir== "L") tar = "-50%";
			else tar = 0;
			//맨처음
			if(now=0) $(".slide").eq(0).find(".img").attr(".src",slides[end].src);
			else $("slide").eq(0).find(".img").attr("src", slides[(now--)],src);
			//보여지는 4개의 li setting
			for(var i=0; i<4; i++){
				if()
			}
			$(".slides").stop().animate({"left":tar},speed, function(){

			});
		}