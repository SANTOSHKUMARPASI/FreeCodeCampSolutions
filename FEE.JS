function cal(num) {

    if (num <= 75) {
        var fee = 40000 + 1000 * (num - 25);
        console.log(`The fee for ${num} members is ${fee}`);
    }
    else if (num > 75) {
        var fee = 40000 + 50 * 1000 + (num - 75) * 800;
        console.log(`The fee for ${num} members is ${fee}`);
    }

}



cal(25);
cal(50);
cal(100);
cal(125);
cal(150);



function cal2(num) {

    if (num <= 75) {
        var fee = 40000 + 1000 * (num - 25);
        console.log(`The fee for ${num} members is ${fee}`);
    }
    else if (num > 75) {
        var fee = 40000 + (num - 25) * 1000;
        console.log(`The fee for ${num} members is ${fee}`);
    }

}

cal2(25);
cal2(75);
cal2(100);
cal2(125);
cal2(150);