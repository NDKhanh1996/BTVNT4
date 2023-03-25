let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let input = parseInt(prompt('input a number '));
let sum = 0;
let arr1 = []

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (i !== j && i !== k && j !== k) {
                sum = arr[i] + arr[j] + arr[k]
                if (sum === input) {
                    arr1.push([arr[i], arr[j], arr[k]])
                    // có vấn đè với dấu ,
                    // arr.splice(arr[i , 1])
                    // arr.splice(arr[j , 1])
                    // arr.splice(arr[k , 1])
                }
            }
        }
    }
}
console.log(arr1)