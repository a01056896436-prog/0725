let a = 10;
let b = a;

const c = 15;
// c = 10; const 변수는 재활당 불가

console.log(a);
console.log(b);
console.log(c);

let var1 = 10;
let var2 = 15;
let temp = var1;

var1 = var2;
var2 = temp;

// JS는 동적 타입 언어기 때문에,
// 다른 타입 데이터를 할당 가능하다.
a = "문자열";
a = true;

