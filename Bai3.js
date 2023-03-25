// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let input = parseInt(prompt('input a number '));
// let sum = 0;
// let arr1 = []
// let distant = 0
// let min = arr.length
// let result = []
// for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k < arr.length; k++) {
//         if (j !== k) {
//             sum = arr[j] + arr[k]
//             if (sum === input) {
//                 arr1.push([arr[j], arr[k]])
//                 distant = j - k;
//                 if (distant < 0) {
//                     distant = distant * -1
//                 }
//                 if (distant < min) {
//                     min = distant
//                     result = [arr[j], arr[k]]
//                 }
//             }
//         }
//     }
// }
// console.log(result)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let input = parseInt(prompt('input a number '));
let minDistant = arr.length
let result = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === input){
            let distant = Math.abs(i - j)
            if (distant < minDistant){
                minDistant = distant;
                result = [arr[i], arr[j]]
            }
        }
    }
}
console.log(result)