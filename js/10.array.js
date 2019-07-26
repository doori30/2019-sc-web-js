/* var obj = $(".box").eq(3)//리턴값이 jQ객체
var n = $(".box").index()//리턴값이 정수 */

//Gatter | Setter
//val()  |val(객체), 
/* var src = $(대상).attr("src")//Getter
.$(대상).attr("src","../img/p1.jpg")//Setter
var val = $("input[name='username']").val()//Getter
var val = $("inpur[name='username']").val("hello")//Setter
html() | text() 

var html = $(".desc").html();//Getter
$(".desc").html("<span>변경된 내용입니다.</span>")
//Setter html소스를가져옴
console.log(html);

var txt = $(".desc").text();//Getter
$(".desc").text("<span>변경된 내용입니다.</span>")
//Setter text문자를 가져옴.
console.log(txt); 

instance 예를 들어(같은것을 여러개를 만듦.)
clone 복제/복사(ctrl+c,v)

document
$("#usetname")

*/


//1.-자바스크립트   /jQuery는 무조건$로 진행.
var stds = [];
var stds = ["홍길동","홍길만","홍길순"];
console.log(stds);
//2.
var stds2 = [];
stds2.push("홍길동")
stds2.push("홍길만")
stds2.push("홍길영")
stds2.push("홍길순")
/* stds2[0]="홍길동";
stds2[1]="홍길만";
stds2[2]="홍길순";
stds2[5]="홍길영"; */
console.log(stds2);
console.log(stds2,length);
//3. 하나의 새로운 것을 복제.-배열=instance
var stds3 = new Array();

var scores =[];
scores[0]=[];
scores[0][0]="";
scores[0][1  ]="";