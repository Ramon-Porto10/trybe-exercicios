const menu = require('./data');
const { getMcInfo } = require('./objetos');

const totalItems = () => {
    const itens = getMcInfo();

    const values = Object.values(itens);
    let sum = 0;
    for (let index = 0; index < values.length; index += 1) {
        sum += values[index];
    }
    return sum;
};

console.log(totalItems());