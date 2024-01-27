const inputName = document.getElementById('name');
const inputEmail = document.querySelector('#email');
const form = document.querySelector('form');
const btnMenosLanchao = document.querySelector('.btn-menos-lanchao');
const qtdLanchao = document.querySelector('#qtd-lanchao');
const btnMaisLanchao = document.querySelector('.btn-mais-lanchao');
const btnMenosLanche = document.querySelector('.btn-menos-lanche');
const qtdLanche = document.querySelector('#qtd-lanche');
const btnMaisLanche = document.querySelector('.btn-mais-lanche');
const btnMenosLanchinho = document.querySelector('.btn-menos-lanchinho');
const qtdLanchinho = document.querySelector('#qtd-lanchinho');
const btnMaisLanchinho = document.querySelector('.btn-mais-lanchinho');
const btnMenosOvo = document.querySelector('.btn-menos-ovo');
const qtdOvo = document.querySelector('#qtd-ovo');
const btnMaisOvo = document.querySelector('.btn-mais-ovo');
const btnMenosAbacaxi = document.querySelector('.btn-menos-abacaxi');
const qtdAbacaxi = document.querySelector('#qtd-abacaxi');
const btnMaisAbacaxi = document.querySelector('.btn-mais-abacaxi');

const atualizaQuantidade = (btnMenos, btnMais, qtdElementos) => {
    btnMenos.addEventListener('click', () => {
        const quantidade = parseInt(qtdElementos.innerText);
        if (quantidade > 0) {
            qtdElementos.innerText = quantidade - 1;
        }
    })

    btnMais.addEventListener('click', () => {
        qtdElementos.innerText = parseInt(qtdElementos.innerText) + 1;
    })

};

atualizaQuantidade(btnMenosLanchao, btnMaisLanchao, qtdLanchao);
atualizaQuantidade(btnMenosLanche, btnMaisLanche, qtdLanche);
atualizaQuantidade(btnMenosLanchinho, btnMaisLanchinho, qtdLanchinho);
atualizaQuantidade(btnMenosOvo, btnMaisOvo, qtdOvo);
atualizaQuantidade(btnMenosAbacaxi, btnMaisAbacaxi, qtdAbacaxi);


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let orderInfo = {};
    orderInfo.Nome = inputName.value;
    orderInfo.Email = inputEmail.value;

    if (parseInt(qtdLanchao.innerText) > 0) orderInfo.qtdLanchao = qtdLanchao.innerText;
    if (parseInt(qtdLanche.innerText) > 0) orderInfo.qtdLanche = qtdLanche.innerText;
    if (parseInt(qtdLanchinho.innerText) > 0) orderInfo.qtdLanchinho = qtdLanchinho.innerText;
    if (parseInt(qtdOvo.innerText) > 0) orderInfo.qtdOvo = qtdOvo.innerText;
    if (parseInt(qtdAbacaxi.innerText) > 0) orderInfo.qtdAbacaxi = qtdAbacaxi.innerText;


    console.log(orderInfo);
})