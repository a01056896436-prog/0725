// 2단부터 9단까지 구구단 출력하기

for (let i = 2; i<=9; i++) {
    console.log(`${i}단`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i}x${j}=${i*j}`);
    }
    console.log("-------------------")
}

// 반복문 레이블을 설정하여
// 원하는 지점에서 continue/break하는 것이 가능하다.
labelName: while(true) {
    while (true) {
        continue labelName;
        break labelName;
    }
}

