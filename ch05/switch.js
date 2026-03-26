const readline = require("readline");

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("번호를 입력하세요.", function(number){
    //입력받은 숫자에 따라 전화 수행
    //1~엄마
    //2~아빠
    //3~동생
    //예외처리- 1~3 외의 나머지는 '해당 단축키가 없습니다.'
    switch (parseInt(number)) {
        case 1:
            console.log("엄마에게 전화가 걸린다.");
            break;
        case 2:
            console.log("아빠에게 전화가 걸린다.");
            break;
        case 3:
            console.log("동생에게 전화가 걸린다.");
            break;
        default:
            console.log("해당 단축키가 없습니다.");
    }
    rl.close();
});