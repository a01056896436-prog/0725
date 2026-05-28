//ES6->object

const { Certificate } = require("node:crypto");

//원래는 이러한 방식으로 객체 인스턴스를 만들어야 한다.
//const obj2 = new Object() 

// 객체 리터링 문법을 사용해 객채를 편하게 생성할 수 있다.
// 객체 내 데이터 속성은 프로피터, 함수는 메시드라고 부른다.
const obj ={
    name: "김민주",
    age: 17,
    //오브젝트 내에는 함수도 추가 가능하다(메세도)
    //JS 함수도 값으로 다룰 수 있기 때문
    sayHello: function() {
        console.log("안녕하세요.");
    }
};

obj.sayHello("asdf")

// obj["age"]와 obj.age는 동일한 기능을 하는 코드이다.
console.log(obj.age);
console.log(obj["age"]);

//객체에 동적으로 프로피터를 추가할 수 있다.
obj.grnder = "male"

//객체에 프로피터를 삭제할 수 있다.
delete obj.grnder;

//객체에 프로피터를 tnwjd할 수 있다.
obj.age= 18

obj.sayHello("asdf");
console.log(obj);


let id = "jmsco";
let pw = "1234";
const credentals={
    id,
    pw,
};

console.log(credentals);
