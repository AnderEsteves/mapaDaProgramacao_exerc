const prompt = require("prompt-sync")();
console.clear();


//Exercícios de JavaScript - Curso Mapa da Programação



//-----------------------------------------------------
// Aula 1 - Variáveis, Dados de entrada e saída: 
//-----------------------------------------------------





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


// const nomeJogador1 = prompt('Informe o nome do 1º jogador: ');
// const nomeClube1 = prompt('Informe o clube em que joga: ');
// const nomeJogador2 = prompt('Informe o nome do 2° jogador: ');
// const nomeClube2 = prompt('Informe o clube em que joga: ');


// console.log('-----Dados 1º Jogador-----');

// console.log('Nome: ',nomeJogador1);
// console.log('Clube: ',nomeClube1);

// console.log('-----Dados 2º Jogador-----');

// console.log('Nome: ',nomeJogador2);
// console.log('Clube: ',nomeClube2);





//-----------------------------------------------------
// Aula 2 - Operadores Matemáticos (Aritméticos):
//-----------------------------------------------------



//1° Crie um código que solicite ao usuário digitar três números. Em seguida, apresente o resultado da soma, subtração, multiplicação dos três.


// const number1 = parseInt(prompt("Informe o 1º número: "));
// const number2 = parseInt(prompt("Informe o 2º número: "));


// console.log("\n******* Resultado *******");
// console.log("Soma: ", number1 + number2);
// console.log("Subtração: ", number1 - number2);
// console.log("Multiplicação: ", number1 * number2);
// console.log("Divisão: ", number1 / number2);



//2°Desenvolva um sistema que solicite ao usuário dois números. Em seguida, calcule a média dos dois números.


// const num1 = parseInt(prompt("Informe o 1º número: "));
// const num2 = parseInt(prompt("Informe o 2º número: "));

// const media = (num1 + num2) / 2;

// console.log("\n A média é ",media);


//3° Desenvolva um programa que leia um número. Em seguida, usando os operadores de incremento, imprima o número seguinte.


// let number = parseInt(prompt("Informe um número: "));
// console.log("Número de incremento: ", ++number);


//4°Desenvolva um programa que leia um número. Em seguida, usando os operadores de decremento, imprima o número anterior.


// let number = parseInt(prompt("Informe um número: "));
// console.log("Número de incremento: ", --number);


//5°Desenvolva um programa que converta uma quantidade de horas inserida pelo usuário em minutos e, em seguida, em segundos.

// console.log("------- Conversror de HORAS > MINUTOS > SEGUNDOS --------");

// let horas = parseInt(prompt("Informe as horas: "));

// let minutos = horas * 60 ;
// let segundos = horas * 3600;

// console.log(horas,"hora tem ",minutos," minutos ou",segundos, "segundos.");


// 6° A distância entre São Paulo e Curitiba é de 400km via BR-116, escreva um programa que o usuário irá inserir a velocidade de seu automóvel.
//  Com esse dado, calcule em quanto tempo (horas) o automóvel chegaria até seu destino.
//   Formula = 404/velocidade


// console.log("----- Viagem SP > PR - Tempo Estimado ------")
// let velocidade = parseInt(prompt("Informe a velocidade em (km/h): "));
// let tempo = 400/velocidade;


// console.log("Tempo estimado de viagem: ", tempo, "horas");







//-----------------------------------------------------
// Aula 3 - Operadores de Comparação:
//-----------------------------------------------------






// 1. Desenvolva um código para identificar se os dois números inseridos são iguais.


// let number1 = parseInt(prompt("Informe o 1° número: "));
// let number2 = parseInt(prompt("Informe o 2° número: "));

// let comparação = number1 == number2;

// console.log("Os numeros inseridos são iguais: ", comparação);



// 2. Escreva um algoritmo para identificar se o nome inserido pelo usuário é diferente do seu.


// let name = prompt("Informe seu nome: ");

// let comparação = name =="anderson";

// console.log("Os nomes são iguais ? ", comparação);



// 3. Desenvolva um sistema para receber duas velocidades de dois pilotos de fórmula 1. Em seguida, apresente o que teve maior velocidade.

// console.log("------- PILOTO MAIS RÁPIDO -------")

// let velo1 = parseInt(prompt("Informe a velocidade do 1° piloto: "));
// let velo2 = parseInt(prompt("Informe a velocidade do 2° piloto: "));

// let maisRapidovelo1 = velo1 > velo2;
// let maisRapidovelo2 = velo1 < velo2;

// console.log("piloto 1 ", maisRapidovelo1);
// console.log("piloto 2 ", maisRapidovelo2);