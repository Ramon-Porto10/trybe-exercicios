const data = require('./data');

// ADICIONAR UMA PROPRIEDADE PARA CADA ELEMENTO

const AddProperty = (data, Proname, Provalue) => data.map((card) => ({...card, [Proname]: Provalue}));

console.log(AddProperty(data.cards, 'Game', 'Yu-Gi-Oh'));




