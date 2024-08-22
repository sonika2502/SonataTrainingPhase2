//Define an array of numbers and find the sum of all elements.
function sumOfArray(arr:any[]):number{
    let sum:number=0;
    for(let i=0; i<arr.length;i++){
        sum = sum +arr[i];
    }
    return sum;
}

let array:any[]=[1,5,8,3];
console.log(sumOfArray(array));
