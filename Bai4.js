let arr1 = [15, 15, 20, 3, 14, 5, 6, 7, 18, 9, 15, 14, 10, 11, 12, 3, 14, 6, 17, 18, 19, 20];

// 5 7 9 10    11 12 17 19

function findUnique(arr) {
    for (let k = 0; k < arr.length; k++) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                //khi if === true thì arr[1] = arr[0] nên cần thểm vòng lặp k để đảm bảo không bỏ sót số nào chưa được if duyệt
                if (arr[i] === arr[j]) {
                    arr = arr.filter(number => number !== arr[i])
                }
            }
        }
    }
    return arr;
}

let uniqueArr = findUnique(arr1)
console.log(uniqueArr)