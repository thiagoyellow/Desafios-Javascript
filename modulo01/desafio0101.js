// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Carlos";
const peso = 200;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30  || imc < 29.9) {
    console.log(`${nome}, você está acima do peso`)
} else { 
    console.log(`${nome}, você não está acima do peso`)
}





// ***** Lembrar de comentar parte de cima antes de executar a de baixo.







// Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 32;

if (sexo === "M" ) {
    if (contribuicao >=  35 ) {
        console.log(`${nome}, Você já está pronto para se aposentar!`)
    } else {
        console.log(`${nome}, Você ainda não pode se aposentar! `)
    }
}else {
    if (contribuicao >=  30 ) {
        console.log(`${nome}, Você já está pronta para se aposentar!`)
    } else {
        console.log(`${nome}, Você ainda não pode se aposentar! `)
    }
} 











