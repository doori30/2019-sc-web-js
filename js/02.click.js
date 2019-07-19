// var $ = jQuery
$("#btMake").click(
	function(){
		// alert("hello-world");
		var userName=$("#userName").val();
		$(".list-group").append('<li class="list-group-item">' + userName + '</li>');
		                                                    //  문자열 더하기
	});
$("#btMake").click(
	function(){
		// alert("hello-world");
		var userName = $("#userName").val();
	var listItem = '<li class="list-group-item">'+userName +'</li>';
	$(".list-group").append(listItem)
// append-뒤에추가, prepend-앞에 추가
	});

$("#btReset").click(
	function(){
		$(".list-group").empty();
	});
// document.getElementById("btReset").addEventListener("click", function(){alfet("힘들다");});
// click-이벤트 함수
// 버튼을 누를 때, 실행되는 함수