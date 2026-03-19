const obj = {
    name: "김민주",
    age: 17,
};

const obj2 = obj;
obj.age= 18;

//창조형 변수의 경우 복사 시,
// 값이 아닌 창조값이 복사되어, 기존값 수정 시 신고 값에도 반영된다.
console.log(obj);
console.log(obj2);

// 배열 또한 창조형 데이터이기 때문에, 내부 데이터 수정 가능하다
const arr = [];
console.log(arr);
arr.push("안녕하세요");
console.log(arr);
