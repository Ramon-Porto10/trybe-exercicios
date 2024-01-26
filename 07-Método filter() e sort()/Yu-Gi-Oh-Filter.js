const data = require('./data2');

// EXIBA TODAS AS CARTAS DE UM DETERMINADO TIPO DA SEGUINTE FORMA:

/*
[
    {TypeId: 1, name: 'Blue-Eyes White Dragon'},
    {TypeId: 1, name: 'Blue-Eyes White Dragon'},
    {TypeId: 1, name: 'Blue-Eyes White Dragon'},
]
*/

const getCardsByAtk = (data2) => data2
    .filter((card) => {card.atk !== undefined})
    .map(({ name, atk }) => ({ name, atk}))
    .sort((a, b) => a.atk - b.atk);

console.log(getCardsByAtk(data.cards));
