function findMaxValue(f, a, b) {
    let max = f(a);
    for (let x = a; x <= b; x++) {
        let y = f(x);
        if (y > max) {
            max = y;
        }
    }
    return max;
}


let f = x => x * x - 8 * x - 5; // Hàm số y = x^2 - 8x - 5
let a = -1;
let b = 2;
let max = findMaxValue(f, a, b);
console.log(`Giá trị lớn nhất của hàm số trong khoảng từ ${a} đến ${b} là: ${max}`);