/*Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto 
chamado empresa. Os dados a serem armazenados são: */
//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:

const empresa = {
    nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço: {
        Rua: "Rua Guilherme Gembala",
        Numero: 260
    }
}

//Imprima em tela utilizando console.log 
//o nome da empresa e seu endereço no seguinte formato:
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.Endereço.Rua}, ${empresa.Endereço.Numero}`);

//Vetores e objetos
/*Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:*/

const programador = {
    nome: "Carlos",
    idade: 18,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'javaScript', especialidade: 'Web/Mobile' }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnlogia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
