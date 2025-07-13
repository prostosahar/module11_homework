// Задание 2

let number = prompt("Введите число, но не больше 1000:");
number = +number;         // Вопрос для проверяющего: так же можно перевести в number, чтобы не делать отдельную переменную? Или есть какая-то более правильная версия?

if (number > 1000){
    console.log("Ваше число - " + number + " слишком большое, допустимое число - 1000");
}
else{
    const result = primeNumber(number);
    if (result === true)
        console.log("Введённое число простое");
    else if (result === false)
        console.log("Введённое число не является простым");
}

function primeNumber(num){
    if (typeof num !== 'number' || isNaN(num)) {
        console.log("Вы не ввели корректное число");
        return null;
    }

    if (num <= 1) return false;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}