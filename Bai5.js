let arr1 = [1, 3, 7, 2, 6, 8]
let arr2 = [4, 5, 2, 6, 2, 8]
let arr3 = [5, 6, 3, 7, 2, 7]
let arr4 = [7, 2, 4, 6, 8, 6]

function sum(arr) {
    let sumArr = 0
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]
    }
    return sumArr
}

console.log(sum(arr1))
console.log(sum(arr2))
console.log(sum(arr3))
console.log(sum(arr4))

let arrF = [sum(arr1), sum(arr2), sum(arr3), sum(arr4)]
let max = sum(arr1)
for (let i = 1; i < 4; i++) {
    if (max < arrF[i]) {
        max = arrF[i]
    }
    if (i === 3) {
        alert('arr' + (i + 1) + ' là mảng có tổng lớn nhất')
    }
}
