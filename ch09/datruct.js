//ES > 비구조화 할당
//배열이나 갹채를 해제차여 변수에 횡당하는 것을 비구조회 혈당구조 분애 혈당)이라고 한다.
const color=["R","G","B"]
const langs = ["C#","JS","Java","PHP","Rust","C++","Kolin"];

//구조분해당을 사용하지 않을 때
//let r  color[0];
//let g  color[1];
// let b color[2];

let [r,g,b]=color
[b,g,r]=[r,g,b]

//표현식에 = {기본값} 형태로 기본값 지정 가능
let[first, second, third = "c"]=langs;

//.룰 이용해 다음 요소로 건너뛰기 가능
let[csharp, ,java,php] = langs;

let asdf = 10;
let zxcv = 15;

//별도 변수 없이 서로 값 변경 가능
[asdf,zxcv]=[zxcv,asdf]

//전개 연산자 사용하여 배열의 나머지 부분을 처리하거나, 배열끼리 정렬 가능
const [first, second, third = "C", ...rest] = langs;
console.log(rest);

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user = {
    id:"gbsw",
    pw:"1234",
    name:"김민주",
    age:17,
}

// let id = user.id;
// let pw = user.pw;
// let name = user.name;
// let age = user.age;

// let {id, pw, name,age= 20} = user;
// console.log(age);

//Object에서도 전개 연산자 사용 가능
let {id, ...others} = user;
console.log(others);
