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
//시작버튼#btStart을 없애고, 준비버튼 #btInit 나오고, 입력창#cnt valu를 4로 만들고, .stage의 player를 지우고,모달창#scoreModal의.modal-body안을 지운다.
$("#btReset").click(function () {
	$("#btInit").removeClass("d-none");
	$("#btStart").addClass("d-none");
	$("#cnt").removeClass("d-none");
	$("#cnt").val('4');
	$(".stage").empty();
	$("#scoreModal .modal-body").empty();
});


//준비
$("#btInit").click(function () {
	//#btInit 안보이고 #btStart보이고 #cnt갯수 만큼 .player생성
	$("#btInit").addClass("d-none");
	$("#btStart").removeClass("d-none");
	$("#cnt").addClass("d-none");
	cnt = $("#cnt").val();
	//   input요소의 value값을 전역변수(var cnt/함수밖에서의 변수) cnt에 저장한다.
	//    val(숫자)를 쓰면 숫자를 val값으로 바꿔줌.
	for (var i = 0; i < cnt; i++)
	//7명을 부를때 0~6번을 돌려서 부름.
		$(".stage").append(playerPrev + (i + 1) + playerNext);
		//for{}<-한줄안에 다 들어오면 생략가능.
});
//시작
$("#btStart").click(function () {
	$("#btStart").addClass("d-none");
	$("#btReset").addClass("d-none");
	//#cnt의 갯수만큼 생성된 .player가 .animate()된다.
	//단, 속도는 2초부터 2.5초 사이에 움직인다.(random)
	//마지막 .playerdml .animate() 종료하는 시점에서 .scoreModal 한다.
	//단, 각각의 .player가 .animate()가 종료될 때마다 .player의 .badge안의 숫자를 .modal-body의 h3태그로 등록한다.
	var speed;
	for (var i = 0; i < cnt; i++) {
		speed = Math.floor(Math.random() * 500 + 2000);
		$(".player").eq(i).stop().animate({
			"left": "90%"
		}, speed, function () {
			var myNumber = $(this).find(".badge").html();
			var $h3 = $('<h3>' + myNumber + '번</h3>').appendTo("#scoreModal .modal-body");
			if ($h3.index() == cnt - 1) {
				$("#scoreModal").modal();
				$("#btReset").removeClass("d-none");
			}
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