const prompt = require("prompt-sync")();
console.clear();

//Variáveis, Dados de entrada e saída: 


// 1º Escreva um programa que irá cadastrar um aluno em um sistema escolar. Para isso, peça o usuário que insira: 
//Nome Completo, Idade, Número da Matricula. Em seguida, imprima as informações na tela.


// const nomeCompleto = prompt('Informe seu nome completo: ');
// const idade = prompt('Informe sua idade: ');
// const numMatricula = prompt('Informe o número de matricula: ');

// console.log('Nome: ', nomeCompleto);
// console.log('Idade:', idade);
// console.log('Número de Matricula:', numMatricula);


// 2º Desenvolva uma programa que irá salvar os dados de 2 jogadores de futebol. 
// Peça ao usuário que digite o nome dos jogares e seus respectivos clubes. Em seguida, imprima as informações na tela.


const nomeJogador1 = prompt('Informe o nome do 1º jogador: ');
const nomeClube1 = prompt('Informe o clube em que joga: ');
const nomeJogador2 = prompt('Informe o nome do 2° jogador: ');
const nomeClube2 = prompt('Informe o clube em que joga: ');


console.log('-----Dados 1º Jogador-----');

console.log('Nome: ',nomeJogador1);
console.log('Clube: ',nomeClube1);

console.log('-----Dados 2º Jogador-----');

console.log('Nome: ',nomeJogador2);
console.log('Clube: ',nomeClube2);


