const lotterynumbers = [];
const firstgame = [15, 20, 17, 1, 60, 51]

// Sorteio de numeros

for (let index = 0; index < 6; index += 1) {
    let randomNumbers = (Math.ceil(Math.random() * 60));
    if (lotterynumbers.includes(randomNumbers)) {
        index -= 1;
    } 
        else {
            lotterynumbers.push(randomNumbers);

        }

};

// Comparação do sorteio com o meu jogo

let numbersOfHits = 0;
let hits = [];

for (let indexlottery = 0; indexlottery < lotterynumbers.length; indexlottery += 1) {
    for (let indexGame = 0; indexGame < firstgame.length; indexGame += 1) {
        if (lotterynumbers[indexlottery] === firstgame[indexGame]) {
            numbersOfHits += 1;
            hits.push(lotterynumbers[indexlottery]);
        }
    }
}

// Quantidade de acertos
console.log(`Números sorteados: ${lotterynumbers}`);
console.log(`Jogo: ${firstgame}`);
console.log(`Quantidade de acertos: ${numbersOfHits}`);
console.log(`Números acertados: ${hits}`);