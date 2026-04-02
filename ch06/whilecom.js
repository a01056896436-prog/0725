// 0~10 사이의 홀수만 출력하기

let num=0;

while(num<10) {
    num++;
    if (num %2 ==0) {
        //현재 루프를 건너뛴다.
        continue;
    }
    console.log(num);
}

// 1~10 사이의 수를 출력하는데, 
// 7을 만나면 그대로 중료하는 코드

num = 0;
while(num<=10) {
    num++;
    if (num == 7) {
        break;
    }
    console.log(num);
}