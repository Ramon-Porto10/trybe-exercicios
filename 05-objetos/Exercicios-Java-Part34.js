const basket = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva'];

const fruits = (arr) => {
    let countfruits = {};
    for (let index = 0; index < basket.length; index += 1){
       let fruta = arr[index];

       if (!countfruits[fruta]) {
        countfruits[fruta] = 1;
       } else {
        countfruits[fruta]++;
       }
    }

    return countfruits;
}

const quantidade = fruits(basket);

console.log(quantidade);

