$("#btList").click(function(){
	$.ajax({ 
		url:"http://webmir.co.kr/score/score_li.php",
		type:"get",
		dataType:"json",
		success: function(res){
			console.log(res);
		}
	});
});

$("#btSave").click(function(){
$.ajax({
	url: "http://webmir.co.kr/score/score_in.php",
	type:"post",
	dataType: "json",
	data:{
		stdname:"정두리",
		kor: 100,
		eng: 50,
		math: 80
	},
	success: function(res){
		console.log(res);
	}
});
});
//$대신 jQuery로 써도됨
//jQuery.ajax({}); 외부에 있는 서버와 통신하는 역할

	
/* //json -데이터를 전송하기 위한 변수의 집합.
var json = {
	"left":"100px",
	"top":"20px"
}
console.log(json.left);
//javascript object -변수와 함수의 집합.
//                   함수도 저장이 가능함.

var jso={
	url:"http://webmir.co.kr/score/score_li_php",
	type:"get",
	log: function(){
		console.log(this.type);
	}
}
console.log();
//console.log(jso.url);  */