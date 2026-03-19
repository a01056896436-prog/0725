// And(&&) 연산 - 앞 쪽 파연사자 모두 참(true)이야 true 반항
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

// Or(||) 연산
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

// Not(!) 연산
console.log(!true); //false
console.log(!false); //true

const age = 17;
//학생의 나이인지 구분해보자.
// 조건 1. 8세 이상
// 조건 2. 19세 하
const result = age >= 8 && age <= 19 ? "학생입니다.":"학생이 아닙니다.";
console.log(result);

// Nullish 병합 연산자
// 작힙이 null 또는 nuswfined인 경우
// 우합물 변환하고, 그림자 많은 경우 지항을 반성한다.
let nickname = null;
console.log(nickname ?? "익명 사용자");
nickname = undefined;
console.log(nickname ?? "익명 사용자");
nickname = "김민주";
console.log(nickname ?? "익명 사용자");
