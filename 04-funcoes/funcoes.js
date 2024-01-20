// Crie uma função que retorne o maior e o menor número de um array

const numbers = [1, 5, 15, 13, 28, 35, 40];
let bigger = numbers[0];
let smaller = numbers[0];

function numberMaxMin (numbers) {

    for ( let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > bigger) {
            bigger = numbers[index];
        } else if (numbers[index] < smaller) {
            smaller = numbers[index];
        }

    }

    return `Menor ${smaller} e o Maior ${bigger}`

}

console.log(numberMaxMin(numbers));