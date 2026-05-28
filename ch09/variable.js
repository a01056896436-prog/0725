//ES6>let과 const
//variabel-변수


// var의 특징
//1. 제정의가 가능하다
//2. 함수 스코프

function functionScope(){
    if(true) {
        var a = 15;
    }

    console.log(a);
}

// functionScope();

//let과 const의 특징
//1. 제정의가 불가능하다
//2. let은 재활당 가능, const는 불가
//3. 블록 스코프

function blockScope(){
    if(true) {
        let a = 15;
    }

    console.log(a);
}

// blockScope();

//let은 재홯당의 가능하고, const는 한 번 선언하면 불가능하다.
let alpha = 10;
alpha= 15;

const bata = 15;
bata= 20;

console.log(alpha+bata);