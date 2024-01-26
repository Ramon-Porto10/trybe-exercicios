const data = require('./data2');

// EXIBA TODAS AS CARTAS COM ATAQUE MAIOR QUE 2000

const getCardsByAtk = (data, atkNumber) => data.filter((card) => card.atk > atkNumber);


console.log(getCardsByAtk(data.cards, 2000));