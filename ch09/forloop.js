//ES6->for ..in, for ..of 문법

const animals=["악어","고양이","공룡"];


for (let i = 0; i<animals.length; i++) {
    console.log(animals[i])
}

//of-> 배열, 문자열 등 iterable한 자료형의 원소를 하나씩 변수에 대입한다.
for(let animal of animals) {
    console.log(animal);
}

const str = "문자열";

for(let c of str) {
    console.log(c);
}

const obj = {
    name: "김민주",
    age: 17,
};

//in 키워드를 사용해 객체 내 모든 프뢰터에  메시드의 키울 수 있다.
//obj[key] 방식으로 객체 내 모든 키와 값에 접근할 수 있다.
for (let key in obj) {
    console.log(key + ", " + obj[key]);
}


for (let key in animals) {
    console.log(key + ", " + animals[key]);
}