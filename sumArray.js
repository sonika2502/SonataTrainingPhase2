//Define an array of numbers and find the sum of all elements.
function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
var array = [1, 5, 8, 3];
console.log(sumOfArray(array));
