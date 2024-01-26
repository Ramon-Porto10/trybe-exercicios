const data = require('./data');

// CRIA UMA STRING PARA CADA CARTA COM SEU ATAQUE E DEFESA

const getCardsAtkAndDef = (cards) => {
    return cards.map((card) => {
        if (card.atk !== undefined && card.def !== undefined) {
            return `A carta ${card.name} possui um ataque de ${card.atk} e uma defesa de ${card.def}`;
        }
     return `A carta ${card.name} não possui ataque e defesa`;
    })
};

console.log(getCardsAtkAndDef(data.cards));