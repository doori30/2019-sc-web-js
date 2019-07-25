/* 수학함수
  var floor =Math.floor(4.4);//=>4무조건버림
	var ceil =Math.ceil(4.4);//=>5무조건올림
	var round = Math.round(4.5);//=>5반올림 */

//$("#scoreModal").modal();

/* var playerStr ='<div class="player position-relative" style="width: 90px;"><img src="../img/2.png" alt="선수" class="char w-100"><div class="badge badge-dark bage-rounded px-2 position-absolute" style="top:0;right:0;">'+i+'</div></div>' */

//전역변수 선언(어느곳에서 가져올수 있음)
var playerPrev = '<div class="player position-relative" style="width: 90px;"><img src="../img/2.png" alt="선수" class="char w-100"><div class="badge badge-dark bage-rounded px-2 position-absolute" style="top:0;right:0;">';
var playerNext = '</div></div>';
var cnt;


//초기화
$("#btReset").click(function () {
	$("#btInit").removeClass("d-none");
	$("#btStart").addClass("d-none");
	$("#cnt").val('4');
	$(".stage").empty();
	$("#scoreModal .modal-body").empty();
})


//실행
$("#btInit").click(function () {
	//난 안보이고 btStart보이고 cnt갯수 만큼 player생성
	$("#btInit").addClass("d-none");
	$("#btStart").removeClass("d-none");
	cnt = $("#cnt").val();
	//   input요소의 갯수를 가져오기.
	//    val(숫자)를 쓰면 숫자를 val값으로 바꿔줌.
	for (var i = 0; i < cnt; i++)
		$(".stage").append(playerPrev + (i + 1) + playerNext);
});
$("#btStart").click(function () {
	var speed;
	for (var i = 0; i < cnt; i++) {
		speed = Math.floor(Math.random() * 500 + 2000);
		$(".player").eq(i).stop().animate({
			"left": "90%"
		}, speed, function () {
			var myNumber = $(this).find(".badge").html();
			var $h3 = $('<h3>' + myNumber + '번</h3>').appendTo("#scoreModal .modal-body");
			if ($h3.index() == cnt - 1) $("#scoreModal").modal();
		});
	}
	//var cnt는 함수 안에서만 진행/지역변수여서 전달이 안됨.
});

/* $("#btStart").click(function(){
	$(".player").eq(0).stop().animate({"left":"90%"},2000);
	$(".player").eq(1).stop().animate({"left":"90%"},1800);
	$(".player").eq(2).stop().animate({"left":"90%"},2200);
	$(".player").eq(3).stop().animate({"left":"90%"},2400);
}); */