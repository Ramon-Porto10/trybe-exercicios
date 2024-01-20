let wage = 3000;
let impostoIR = 1;
let impostoINSS = 0.08;
const INSS1 = wage * (8/100);
const INSS2 = wage * (9/100);
const INSS3 = wage * (11/100);
const INSS4 = 570.88;
const IR1 = 0;
const IR2 = 142.80;
const IR3 = 354.80;
const IR4 = 636.13;
const IR5 = 869.36;
const LIQ1 = 0;
const LIQ2 = 0.075;
const LIQ3 = 0.15;
const LIQ4 = 0.225;
const LIQ5 = 0.275;
let liquota = 0;
let wageINSS = 0;
let wageIR = 0;

if (wage > 5189.82) {
    impostoINSS = INSS4;
} else if (wage >= 2594.93 && wage <= 5189.82) {
    impostoINSS = INSS3;
} else if (wage >= 1556.95 && wage <= 2594.92) {
    impostoINSS = INSS2;
} else if (wage <= 1556.94) {
    impostoINSS = INSS1;
}

wageINSS = (wage - impostoINSS);
console.log(wageINSS);

if (wageINSS > 4664.68) {
    impostoIR = IR5;
    liquota = LI5;
} else if (wageINSS >= 3751.06 && wageINSS <= 4664.68) {
    impostoIR = IR4;
    liquota = LIQ4;
} else if (wageINSS >= 2826.66 && wageINSS <= 3751.05) {
    impostoIR = IR3;
    liquota = LIQ3;
} else if (wageINSS >= 1903.99 && wageINSS <= 2826.65) {
    impostoIR = IR2;
    liquota = LIQ2;    
} else if (wageINSS <= 1903.98) {
    impostoIR = IR1;
    liquota = LIQ1;
}

wageIR = (wageINSS * liquota) - impostoIR
console.log(wageIR);

console.log('Resultado: R$' + (wageINSS - wageIR));