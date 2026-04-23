
let globalNum=0;//전역 변수

// 함수 선언서
// function mod(a,b=0) {
//     메게변수 기본값을 b=0같은 방법으로 설정할 수 있다.
//     return a%b
// }

// 함수 표현식
let mod = function(a,b) {
    let num = 0; //지역 변수
    return a&b;
};

//익명 함수
// function(a,b) {
//     return a&b;
// };

//return 구문은 데이터를 반환하고, 함수를 종료하는 용도로 사용한다.