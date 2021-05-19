const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrNumbers2 = [31, 232, 312, 43, 54, 66];



function multiplay(arr, functionToCallBack = null) {
    const resultArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        let res = arr[i] * 10
        resultArr.push(res);

        if(functionToCallBack) {
            functionToCallBack(res);
        }

    }

    console.log(resultArr)

}


function showInConsole (message) {
    console.log('Current number ' + message);
}

multiplay(arrNumbers, showInConsole);


function showMessage(message) {
    alert('Current number ' + message);
}

multiplay(arrNumbers2, showMessage);