// fpr(초기문; 조건식; 증강문){}

//i를 0부터 시작해,
//i가 5와 같거나 커질 때 까지 i응 1씩놀리며 반복하겠다.

for (let i =0; i<5; i++){
    console.log("Hello World");
}

let dan = 7;
for (let i=1; i<=9; i++) {
    console.log(`${dan}x${i}=${dan*i}`)
}

let men = 0
for (let i=1; i<11; i++) {
    // men = men + i
    men += i
}

console.log(men)