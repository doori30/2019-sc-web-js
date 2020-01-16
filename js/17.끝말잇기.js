var body = document.body;
var word = document.createElement('div');
word.textContent = '고양이';
document.body.append(word);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
//    태그안에 들어가는 글자
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);
폼.addEventListener('submit',function(e){
    e.preventDefault();// 기본동작을 멈출 때 사용
    if(word.textContent[word.textContent.length - 1] === 입력창.value[0]) {
        결과창.textContent='딩동댕';
        word.textContent=입력창.value;
        입력창.value='';
        입력창.focus();
    }
    else {
        결과창.textContent = '땡';
        입력창.value='';
        입력창.focus();
    }
});



// var word = '고양이';
// while (true){
//     var answer = prompt(word);
//     if(word[word.length-1]===answer[0]){
//         alert('딩동댕');
//         word = answer;
//     }
//     else{
//         alert('땡');
//     }
// }