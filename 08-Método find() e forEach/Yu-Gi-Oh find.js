const data3 = require('./data');

// ENCONTRE A PRIMEIRA CARTA DE ACORDO COM O SEU TIPO

const firstCardByType = (typeName) => {
    const getType = data3.types.find((type) => {type.name === typeName});
    const getCard = data3.cards.find((card) => {card.typeId === getType.id});

};

console.log(firstCardByType('Dragon'));