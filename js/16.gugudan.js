
var num1 = Math.ceil(Math.random() * 9); //구구단 앞숫자
var num2 = Math.ceil(Math.random() * 9); //구구단 뒤숫자
var 결과 = num1 * num2; //결과

var body = document.body;
var word = document.createElement('div');
word.textContent = String(num1) + '곱하기' + String(num2) + '는?';
document.body.append(word);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
//    태그안에 들어가는 글자
//화면 조작 만들어서 길어짐.
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);
폼.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본동작을 멈출 때 사용
    console.log(결과, 입력창.value);
    if (결과 === Number(입력창.value)) {
        // 결과-숫자   -입력창은 문자이기때문에 숫자로 바꿔준다.
        결과창.textContent = '딩동댕';
        // word.textContent=입력창.value;
        num1 = Math.ceil(Math.random() * 9); //구구단 앞숫자
        num2 = Math.ceil(Math.random() * 9); //구구단 뒤숫자
        결과 = num1 * num2; //결과
        word.textContent = String(num1) + '곱하기' + String(num2) + '는?';
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
});


// var gugudan = true; //조건
// while (gugudan) {
//     var answer = prompt(String(num1) + '곱하기' + String(num2) + '는?')
//     if (result === Number(answer)) {
//         alert('정답');
//         gugudan = false;
//     } else {
//         alert('땡')
//     }
// }


// $("#bt").click(
//     function(){
//         while(true){
//             var num1 = Math.floor(Math.random()* 9) + 1; //구구단 앞숫자
//             var num2 = Math.floor(Math.random()* 9) + 1;//구구단 뒤숫자
//             var result = num1 * num2; //결과
//             var gugudan =true; //조건
//             while (gugudan) {
//                 var answer = prompt(String(num1) + '곱하기' + String(num2) + '는?')
//                 if(result === Number(answer)){
//                     alert('정답');
//                     gugudan = false;
//                 }
//                 else {
//                     alert('땡')
//                 }
//             }
//     }
//     }
// ) 