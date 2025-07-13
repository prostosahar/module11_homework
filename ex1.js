// Задание 1

function PropertiesValues(array){
    

    let countEven = 0;
    let countOdd = 0;
    let countNull = 0;
    let countZero = 0;
    let countOther = 0;

    for (let i = 0; i < array.length; i ++){
        if (array[i] === null)
            countNull++;
        else if (typeof array[i] === 'number'){
            if (array[i] === 0)
                countZero++;
            else if (array[i] % 2 != 0)
                countOdd++;
            else if (array[i] % 2 == 0)
                countEven++;
        }
        else{
            countOther++;
        }

    }

    console.log("Количество четных значений: " + countEven + "\nКоличество нечетных значений: " + countOdd + "\nКоличество null значений: " + countNull + "\nКоличество 0 значений: " + countZero + "\nКоличество прочих значений: " + countOther);
}

const array = [1, 2, 3, 4, 5, 0, '3', 'a', 'b', null, 0];
PropertiesValues(array);