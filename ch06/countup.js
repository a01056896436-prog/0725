function x2(x){
    return x * 2;
}
console.log(x2(2));


function solution(start_num, end_num) {
    const answer=[];
    for(let i = start_num; i <=end_num; i++){
        answer.push(i);
    }
    return answer;
}

let a = solution(3, 10);
console.log(a);

function solution(number, n, m) {
    let answer=0
    if (number % n===0 && number % m === 0) {
        answer= 1
    }
    return answer;
}

function solution(num, n) {
    let result=0;
    if(num % n ==0) {
        result = 1
    }
    return result;
}