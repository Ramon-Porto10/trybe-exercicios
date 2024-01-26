const data = require('./data');
const data4 = require('./data');

// ADICIONAR A PROPRIEDADE 'GAME' EM TODOS OS ELEMENTOS DO ARRAY CARDS

const addProperty = (propKey, propValue) => {
    data.cards.forEach((card) => {card[propKey] = propValue});
};

addProperty('Game', 'Yu-Gi-Oh')

console.log(data.cards);