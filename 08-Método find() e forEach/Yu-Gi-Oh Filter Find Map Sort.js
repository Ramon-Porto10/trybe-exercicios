const data = require('./data');

// PEGA TODAS AS CARTAS DE UM DETERMINADO TIPO

const getCardByType = (...cardType) => {
    return data.cards
     .filter(({ typeId }) => cardType
        .find((type) => type === typeId))
     .map(({ typeId, name }) => ({ typeId, name }))
     .sort((a, b) => a.typeId - b.typeId);
};

console.log(getCardByType(1, 2, 3, 4));

