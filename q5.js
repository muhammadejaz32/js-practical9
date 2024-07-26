function fact(num){
    if(num===0||num===1){
        return 1;
    }
    else{
        return num *fact(num-1)
    }

    }
let num1 = 5;
let num2 = 6;
let num3 = 7;
console.log(`factorial of ${num1} is ${fact(num1)}`);
console.log(`factorial of ${num2} is ${fact(num2)}`);
console.log(`factorial of ${num3} is ${fact(num3)}`);