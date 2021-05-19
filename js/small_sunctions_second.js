let numbersArray = [1, 2, -3, 10, 100, 200, 17, -1, -5, -6];

let result = arrayPow(numbersArray, 5);

console.log(result)

// Возводим в степень все положительные числа из переданного массива
function arrayPow(arr, degree) {
    const resultArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        if(arr[i] <= 0) {
            const newVal = myCustomPow(arr[i], degree, 'vova');
            resultArr.push(newVal);
        }
    }

    return resultArr;
}



function myCustomPow(numb, degree, suffix) {
    return numb * degree + `_${suffix}`;
}