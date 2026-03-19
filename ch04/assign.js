let a = 10;
let b = 3;

console.log((a += b)); //a = a + b
console.log((a -= b)); //a = a - b
console.log((a *= b)); //a = a * b
console.log((a /= b)); //a = a / b
console.log((a %= b)); //a = a % b
console.log((a **= b)); //a = a ** b

a = 1
// 증가 연산자
// ++, --앞에 붙으나 뒤에 붙으나
// a = a + 1 or a = a - 1 연산은 동일하다
// 앞에 붙은 경우 전위 연산으로 우선 수행
// 듸에 붙는 경우 후위 연상으로 우선수위가 낮다.
console.log(a++); // 1
console.log(++a); // 3

console.log(a--); // 3
console.log(--a); // 1