// DESAFIO 1.2 
// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260


const empresa = {
    nome: "RocketSeat",
    cor: "Roxo",
    foco: "Programacao",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);



// ***** Lembrar de comentar parte de cima antes de executar a de baixo.



// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
// As tecnologias também devem ser objetos contendo nome e especialidade.
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop


const programador = {
    nome: "Thiago",
    idade: 23, 
    tecnologias: {
        nome: "Javascript",
        especialidade: "Desktop"
    }
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias.nome} com especialidade em ${programador.tecnologias.especialidade}`)
