//화살표 함수

//선언식
function plus(a,b) {
    return a+b;
}

// let plus = function(a,b) {
//     return a+b;
// };

//함수 내용이 한 줄인 동시에 해당 구문이 return문인 경우 중괄호 및 return 생략 가능 
let plus = (a,b) => a+b;

// let plus1 = function (a) {
//     return a+1;
// };

//매개변수가 하나만 경으 매개변수 괄호 생략 가능
let plus1 = a => a+1;

//매개변수가 없는 경우 빈 괄호로 화살표 함수 작성
let asdf=()=>1;

