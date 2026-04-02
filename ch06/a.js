function solution(num_list) {
    var answer = 0;
    
    var gobhagi = 1;
    var plus= 0;
    for (var i = 0; i < num_list.length; i++) {
        gobhagi *= num_list[i];
        plus += num_list[i];
    }
    
    var zegob = plus ** 2
    
    if (gobhagi < zegob) {
        answer = 1;
    }
    return answer;
}