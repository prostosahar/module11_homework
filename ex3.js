// Задание 3

function summFunc (num){
    return function (num2){
        return num + num2;
    };
}

const number1 = 100;
const number2 = 150;
console.log('Сумма двух чисел = ' + summFunc (number1)(number2));
