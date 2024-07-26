function array(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];

    }
    return sum/arr.length;
}

console.log(`average of array is ${array([5,4,5,6,8])}`)
console.log(`average of array is ${array([5,4,5,6])}`)
console.log(`average of array is ${array([5,4,5,6,2,4])}`)

