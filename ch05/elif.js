const readline = require("readline");

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요",function(score){
     // 조건 1. 점수가 99점 이상, 100점 이하인 경우 "징힉대상"
    // 조건 2. 점수가 60점 이상, 90점 미만인 경우 "합격"
    // 조건 3. 점수가 0점 이상, 60점 미만인 경우 "불합격"
    // 예외처리, 점수가 0점 미만, 100점 초과인 경우 "값이 유호하지 않습니다."
    let result = null;

    if (score >= 99 && score <= 100) {
       result = "장학대상"
    }else if(score >= 60 && score < 90) {
        result="합격"
    }else if (score >= 0 &&score < 60){
        result="불합격"
    }else {
        result="값이 우효하지 않습니다."
    }

    console.log(result)

    rl.close();
});