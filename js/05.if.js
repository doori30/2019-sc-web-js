/* 
변수타입
●primitive
number|string|boolean|null|undefined
●object
arrayf, unction, RegExp

●연산자
+ - * / %(mod)
%(mod) 4%3 : 1, 5%3:2 , 6%3:0
 (나머지 연산자 나누기 후 남은 연산)
 ( 5/3=1(나누지 못한 수2))
●비교 연산자
==
===
<=.>=
<,>
비교후 결과 true | false

●if문1
if(조건) {
	조건이 참(true) 일때만 실행
}
●if문2
if(조건) {조건이 참일때 실행}
else {조건이 거짓일때 실행}

●if문3
if(조건1){
	조건1이 참이면 실행
}
else if(조건2){
	조건2가 참이면 실행
}
else if(조건3){
	조건3이 참이면 실행
}
else {
	그 외에 경우
}
●삼항연산자
조건 ? 참일경우 : 거짓일 경우 실행문

*/
//(window생략이 가능해서 생략하고 사용-bom)
//window.alert("hello");
//window.confirm("선택하세요");
//prompt();->작업물을 보이게 하려면 앞에 변수가 있어야 함.
//var num=prompt("원하는 숫자를 입력해 주세요.")
//변수 숫자num 아이디id 문자str
//html() 앞전거 삭제하고 새로대체함.

$("#bt1").on("click",function(){
	if(confirm("아래의 글을 삭제하시겠습니까?\n확인을 눌러주세요.")){
		$(".revData").empty();
	}
	else{
		$(".revData").append('<div>살려주셔서 감사해요~</div>')
	}
});

$("#bt2").click(function(){
	var str=prompt("원하는 숫자를 입력해 주세요");
	if(str > 0){
		$(".revData").html("양수를 고르셨네요.");
	}
	else if(str < 0){
		$(".revData").html("음수를 고르셨네요.")
	}
	else if(str==0) {
		$(".revData").html("0을 고르셨네요.")
	}
	else {
		$(".revData").html("잘 모르겠어요.")
	}
});

$("#bt3").click(function(){
//addClass
//removeClass
//$(객체)hasClass("class명")
//=>객체가 클래스를 가지고 있으면 true
//=>객체가 클래스를 가지고 있지 않으면 fals
/* if($(".box").hasClass("d-none")){
	$(".box").removeClass("d-none");
}
else{
	 $(".box").addClass("d-none");
}
}); */
$(".box").hasClass("d-none")?
$(".box").removeClass("d-none") :
$(".box").addClass("d-none");
});