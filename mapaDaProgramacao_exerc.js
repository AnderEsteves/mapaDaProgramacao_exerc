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





//-----------------------------------------------------
// Aula 4 - Operadores Lógicos:
//-----------------------------------------------------





// 1° Desenvolva um sistema para identificar se uma pessoa tem preferência em um embarque. Para isso, o usuário precisará inserir duas informações:
//  idade e tipo de bilhete. Se a idade for maior do que 60 anos ou tipo de bilhete for “premium”, o usuário poderá passar a frente. Imprima a mensagem:
//   “Embarque preferencial: [true ou false]”



// console.log("------- PREFERÊNCIA DE EMBARQUE -------");

// let bilhete = prompt("Informe seu tipo de bilhete (comum/premium): ");
// let idade = parseInt(prompt("Informe sua idade: "));


// let condição = bilhete == "premium" && idade > 60;

// console.log("Embarque preferencial: ",condição);



// 2° Para uma criança participar das aulas de natação do colégio, ela deve ter menos de 10 anos e estar na série 5. Desenvolva um sistema em que
//  o usuário insira a idade da criança e também a respectiva série. Em seguida, imprima se poderá ou não participar das aulas de natação.



// console.log("------- AULA DE NATAÇÃO -------");

// let serie = parseInt(prompt("Informe em qual série está: "));
// let idade = parseInt(prompt("Informe sua idade: "));

// let condição = serie == "5" && idade < 10;

// console.log("Participar da aula de natação: ",condição);



// 3° Para se qualificar para o melhor jogador de vôlei do mundo, o candidato deverá ter marcado durante a temporada uma pontuação maior ou 
// igual a 50 pontos, ter mais de 3 anos de carreira e também ter fornecido pelo menos 30 assistências. Desenvolva um programa que leia o nome, 
// pontuação, tempo de carreira e numero de assistências. Em seguida, imprima uma mensagem se ele se qualifica ou não para ser candidato a melhor do mundo.



// console.log("------- MELHOR DO MUNDO -------");

// let nome = prompt("Informe seu nome: ");
// let tempoCarreira = parseInt(prompt("Informe seu tempo de carreira: "));
// let pontuacao = parseInt(prompt("Informe a pontuação na temporada: "));
// let assistencia = parseInt(prompt("Informe quantas assistência concedeu: "));

// let condicao = pontuacao >=50 && tempoCarreira > 3 && assistencia >=30;

// console.log(nome, "qualificado para melhor do mundo: ",condicao);



// 4° Para um número ser ímpar, o resultado do módulo (%) tem que ser diferente de zero. Desenvolva um programa que identifique se o
//  número inserido pelo usuário é impar.

// console.log("------- NÚMERO PAR/ÍMPAR -------");

// let number = parseInt(prompt("Informe um númreo: "));

// let resultado = number % 2 == 0;

// console.log("True = par ou false = ímpar: ", resultado);





//-----------------------------------------------------
// Aula 5- Estruturas Condicionais:
//-----------------------------------------------------






// 1. Para um clube europeu ter chances de se classificar para Champions League, ele deverá ter feito mais de 60 pontos durante o campeonato. 
// Caso tenha feito mais de 75, as chances são maiores. Desenvolva uma solução que leia o nome e pontuação do time. Em seguida, usando as 
// estruturas condicionais, caso a pontuação seja maior do que 75, imprima “Excelentes chances de classificação”. Caso entre 60 e 75,
//  imprima “Boas chances de se classificar". Caso contrário: “Chances baixas de se classificar”.




// console.log("------- CLASSIFICAÇÃO CHAMPIONS LEAGUE -------");


// let name = prompt("Informe o nome do clube: ");
// let pontuacao = parseInt(prompt("Informe a pontuação: "));



// if (pontuacao > 60 && pontuacao < 75 ){
//     console.log("\n",name,"tem boas chances de se classificar");

// }else if (pontuacao > 75){
//     console.log("\n",name,"tem excelentes chances de classificação");

// }else{
//     console.log("\n",name,"tem chances baixas de se classificar");
// }




// 2. Desenvolva um sistema que leia a idade do usuário. Caso a idade seja maior que 70 anos, imprima a mensagem “Idoso”, caso entre 30 e 70: “Adulto”, 
// entre 20 e 30: “Jovem Adulto”, entre 15 e 20: “Jovem”, menor do que 15: “Criança ou adolescente”




// console.log("------- TERMÔMETRO DE IDADE -------");

// let idade = parseInt(prompt("Digite sua idade: "));

// switch (true) { // usando true como (expressão) convervetemos de sequencia de comparações para construções 
//     case (idade > 70):{
//         console.log("\nParabéns por ter chegado até aqui, sorria :)");
//     break;    
//     }
//     case (idade > 30 && idade <= 70):{
//         console.log("\nAdulto");
//     break;    
//     }
//     case (idade > 20 && idade <= 30):{
//         console.log("\n Jovem adulto");
//     break;   
//     }
//     case (idade > 15 && idade <= 20):{
//         console.log("\n Jovem Padawan");
//     break;       
//     }
//     default:{
//         console.log("Criança ou adolescente");
//     }
// }




// 3. Desenvolva um sistema que leia a velocidade de um veiculo. Usando o operador ternário (? e :), caso a velocidade seja maior do 100, 
// imprimia a mensagem: “Carro em alta velocidade", caso contrário: “Velocidade normal”.





//  console.log("------- QUAL A SUA VELOCIDADE? -------");
 
//  let velocidade = parseInt(prompt("Digite sua velocidade em km/h: "));

//  console.log(velocidade > 100 ? "Carro em alta velocidade" : "Velocidade normal");

//  if(velocidade > 100){
//     console.log("Carro em alta velocidade");
//  }else{
//     console.log("Velocidade normal");
//  }





// 4. Crie um programa para identificar se a letra digitada pelo usuário é uma vogal.

// console.log("------- É VOGAL OU NÃO É -------");

// let letra = prompt("Informe uma letra: ");

// console.log(letra === "a" || letra === "e" || letra === "i"|| letra === "o"|| letra === "u"? "a letra é uma vogal" : "a letra não é uma vogal");






//-----------------------------------------------------
// Aula 6- Funções:
//-----------------------------------------------------






// 1. Desenvolva um sistema que execute uma função para calcular a média de 3 números


// function media(num1,num2,num3){
//     return (num1 + num2 + num3) / 3
// }

// let primeiroNum = parseInt(prompt("Informe o 1° número: "));
// let segundoNum = parseInt(prompt("Informe o 2° número: "));
// let terceiroNum = parseInt(prompt("Informe o 3° número: "));

// let resultado = media(primeiroNum, segundoNum, terceiroNum);

// console.log(resultado);




// 2. Desenvolva uma função para analisar qual o maior número digitado pelo usuário. Dica: armazene em uma variável global qual é o maior 
// número e trate na função (procedimento) a alteração desse valor. Utilize um lanço de repetição para o usuário inserir os números de forma
//  ilimitada (Exemplo de condição de parada: digitar 0 para parar ou “s” para continuar)


// let simounao = "s";
// let maiorNumber = 0;


// function maiorNum (){
//     if(number > maiorNumber ){
//        return maiorNumber = number;
//      }
// }


// while (simounao === "s"){

//      number = parseInt(prompt("Informe um número: "));

//      maiorNum(number);

//      simounao = prompt("Deseja continuar? digite (s/n) ");

// };


// console.log("O maior numero é: ",maiorNumber);




// 3. Escreva um algoritmo que através de uma função identifique se o nome de uma marca de carros inserida pelo 
//usuário é de origem alemã (Volkswagen, Audio, BMW, Mercedes)


// function identifiqueMarca(){
//     if (marca =="Volkswagen" || marca == "Audi" || marca == "Mercedes"){
//         console.log("É uma marca alemã! parabéns :)");        
//     }else{
//         console.log("Infelizmente não tens um carro alemão :(");
//     }
// }


// let marca = prompt("Digite a marca do carro: ");
// identifiqueMarca();




// 4. Desenvolva uma sistema que através de uma função apresente a conversão do real para dólar e euro, utilizando o switch case


// function conversao(){
//     switch (moeda){
//         case "Dolar":
//             console.log("A conversão é de", valor * 4.00);
//         break;    
//         case "Euro":
//             console.log("A conversão é de", valor * 2.00);
//         break;
//     }
// };

// let valor = parseInt(prompt("Informe o valor em reais para conversão:"));
// console.log("\nMoedas para conversão: Dolar/Euro")
// let moeda = prompt("Informe a moeda desejada:");

// conversao();
