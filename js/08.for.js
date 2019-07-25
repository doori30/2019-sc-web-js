/* if(조건){
	참&거짓->실행
}
for(초기값;조건;증가값&감소값){
//조건이 참일동안은 계속해서 반복 실행
} 
i = i + 1;
var i = 0;
console.log(i);
=>1 (축약한거i+=1;)
i++(처음에 나를 더한거)
=>i=i+1

*/

for (var i = 1, sum = 0; i <= 10; i++) {
	sum += i;
}
//console.log(sum); //i가 10 이상이 되면 멈춤.

//초기화
$("#btReset").click(function () {
	$(".box-tree").empty();
	$(".boxes").empty();
	$(".tb-gugudan thead,.tb-gugudan thead").empty();
	$(".bt-ugudan2 thead,.tb-gugudan2 tbody").empy();
	//$(".tb-gugudan").html('<thead></thead><tbody></tbody>');
});
//트리 만들기
/* $("#btTree").click(function(){
var asterisk = '';
	for(var i=0;i<10;i++){
		asterisk += '*';
$(".box-tree").append('<div>'+asterisk+'</div>');
}
for(i=0;i<3;i++){
//	asterisk += '**';	
$(".box-tree").append('<div> ** </div>')
}
}); */
$("#btTree").click(function () {
	var asterisk = '';
	for (var i = 0; i < 13; i++) {
		asterisk += '*';
		if (i > 9) $(".box-tree").append('<div>**</div>')
		else $(".box-tree").append('<div>' + asterisk + '</div>');
	}
});
//박스 만들기
$("#btBox").click(function () {

	var box = '<div class="box float-left border border-info bg-success"style="width:20px;height:20px;"></div>'
	for (var i = 0; i < 2000; i++) {
		$(".boxes").append(box);
	}
	$(".box").mouseenter(function () {
		$(this).stop().animate({
			"opacity": 0
		}, 300, function () {
			$(this).animate({
				"opacity": 1
			}, 2000)
		})
	})
});

//구구단만들기
$("#btGugudan").click(function(){
	$(".tb-gugudan thead").append('<tr></tr>')
	for(var i=2;i<=9;i++){
		$(".tb-gugudan thead tr").append('<th>'+i+'단</th>');	
	}
	for(i=1;i<=9;i++){
		$(".tb-gugudan tbody").append('<tr>')

		for(var j=2;j<=9;j++){
			$(".tb-gugudan tbody")
			.append('<td>'+j+' * '+i+' = '+(j*i)+'</td>')
		}

		$(".tb-gugudan tbody").append('</tr>')
	}
});
//구구단만들기2
$("#btGugudan2").click(function(){
	var $tb = $(".tb-gugudan2");
	var $thTr = $("<tr></tr>").appendTo($tb.find("thead"));
	var $tbody = $tb.find("tbody");
	for(var i=0, html=''; i<=9; i++) {
		if(i == 0) html += '<th>구구단</th>';
		else html += '<th>'+i+'</th>';
	}
	console.log(html);
	$thTr.append(html);
	for(i=2, html=''; i<=9; i++) {
		html += '<tr>';
		for(var j=0; j<=9; j++) {
			if(j==0) html += '<td>'+i+' 단</td>';
			else html += '<td>'+i+' * '+j+' = '+(i*j)+'</td>';
		}
		html += '</tr>';
	}
	console.log(html);
	$tbody.append(html);
});
/*$("#btGugudan2").click(function(){
	var $tb = $(".tb-gugudan2");
	var $thTr = $("<tr></tr>").appendTo($tb.find("thead"));
	var $tbody = $tb.find("tbody");
	for(var i=0, html=''; i<=9; i++) {
		if(i == 0) html += '<th>구구단</th>';
		else html += '<th>'+i+'</th>';
	}
	console.log(html);
	$thTr.append(html);
	for(i=2, html=''; i<=9; i++) {
		html += '<tr>';
		for(var j=0; j<=9; j++) {
			if(j==0) html += '<td>'+i+' 단</td>';
			else html += '<td>'+i+' * '+j+' = '+(i*j)+'</td>';
		}
		html += '</tr>';
	}
	console.log(html);
	$tbody.append(html);
}); */