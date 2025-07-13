// Задание 4

const a = 5;
const b = 15;
let count = a;

const timer = function(a, b){
    if (count <= b){
        console.log(count);
        count++;
    }
};

if (a < b){
    const intervalId = setInterval(timer, 1000, a, b);
    if (count === b)
        clearInterval(intervalId);
}
else{
    console.log ("Число 'a' должно быть меньше числа 'b'!");
}