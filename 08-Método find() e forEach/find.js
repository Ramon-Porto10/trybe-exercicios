const data2 = require('./data');

// ENCONTRE UMA CARTA DE ACORDO COM O SEU NOME

const findCard = (data2, cardName) => {
    const cardFound = data2.find((card) => {card.name === cardName});
}


console.log(findCard(data2.cards, 'Dark Magigician'));