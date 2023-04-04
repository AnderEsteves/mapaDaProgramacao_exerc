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


// let marca = prompt("Digite a marca do carro: ")


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






//-----------------------------------------------------
// Aula 7 : Objetos:
//-----------------------------------------------------




// 1. Construa uma solução em que o usuário insira os dados de um aluno (nome, matricula, nota1, nota2, nota3). Salve as informações em um 
// objeto e crie um método dentro deste objeto que calcule a média das 3 notas. Em seguida, apresente a média final para o usuário.



// console.log("------- CADASTRO ALUNO -------");

// const aluno = new Object();
//     aluno.nome = prompt("Nome: ");
//     aluno.matricula = Number(prompt("Matricula: "));
//     aluno.nota1 = parseInt(prompt("Nota 1: "));
//     aluno.nota2 = parseInt(prompt("Nota 2: "));
//     aluno.nota3 = parseInt(prompt("Nota 3: "));
//     aluno.media = function(){
//         return (aluno.nota1 + aluno.nota2 + aluno.nota3) /3 ;
//     };


// console.log("A média do aluno ", aluno.media());



// 2. Desenvolva um sistema que salve  um objeto uma receita de bolo, seguindo as seguintes informações:
//     1. Nome da receita
//     2. Ingredientes
//     3. Passos para a receita
// Em seguida, crie um método dentro do objeto que imprima na tela os dados da receita.



// const receita = new Object();
//     receita.nome = "Bolo de Cenoura";
//     receita.ingredientes = "\n 1/2 xícara (chá) de óleo, 3 cenouras médias raladas, 4 ovos, 2 xícaras (chá) de açúcar, 2 e 1/2 xícaras (chá) de farinha de trigo, 1 colher (sopa) de fermento em pó";
//     receita.modoDePreparo = "\n Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.  Acrescente o açúcar e bata novamente por 5 minutos. Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente.Acrescente o fermento e misture lentamente com uma colher. Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.";
//     receita.mostrar = function(){
//         switch (escolha){
//             case "ingredientes":
//                 console.log(receita.ingredientes);
//             break;
//             case "mododepreparo":
//                 console.log(receita.modoDePreparo);
//             break;
            
//         }
//     }

// console.log("------- LIVRO DE RECEITA -------");
// console.log("\nINFORME QUAL ETAPA GOSTARIA DE VER (INGREDIENTES OU MODO DE PREPARO)");
// let escolha = prompt("Informe o desejado: ");
// receita.mostrar();





//-----------------------------------------------------
// Aula 8 : Estrutura de Repetição:
//-----------------------------------------------------




// 1. Construa uma solução que através do loop `for` leia 5 números diferentes. A partir disso, apresente para o usuário qual foi o maior e qual 
// foi o menor número digitado



// console.log("------ MAIOR & MENOR NÚMERO ------");

// let qtde = Number(prompt("Informe quantos números deseja escrever: "));

// let maiorNum = 0;
// let menorNum = 0;

// for(i = 0; i < qtde; i++){
//     let num = Number(prompt("Digite o "+ (i+1)+ " número: "));
   

//     if (num > maiorNum) maiorNum = num;
    
//     if (!menorNum) menorNum = num;;
    
//     if (num < menorNum) menorNum = num;

// }

// console.log("O maior número é: ", maiorNum);
// console.log("O menor número é: ", menorNum);




// 2. Desenvolva um código que primeiro o usuário insira os dados de um carro (ano, marca, modelo, cor e valor). Em seguida, através do loop `for in`
//  apresente os dados na tela.



// console.log("------ CADASTRO DO CARRO -----");

// const carro = new Object();
//   carro.modelo = prompt("Modelo: ");
//   carro.marca = prompt("Marca: ");
//   carro.cor = prompt("Cor: ");
//   carro.ano = prompt("Ano: ");
//   carro.valor = Number(prompt("Valor: "));


// console.log("------ FICHA TÉCNICA -----");

// for (let propriedade in carro){
//   console.log(propriedade + " : " + carro[propriedade]);
// };
  



//------------------------- outros exemplos de for in e for of (estudo) -------------------------------------




// let carro = new Object();
//   carro.modelo = prompt("Modelo: ");
//   carro.marca = prompt("Marca: ");



// // propriedade
// for(let i in carro){
//     console.log(i)
// }  

// //valor 
// for(let i in carro){
//     console.log(carro[i])
// }  

// //ambos
// for(let i in carro){
//     console.log(i , carro[i])
// }  


// const number = ['lua', 'sol', 'terra', 'jupter'];

// console.log("in 1");
// // propriedade
// for(let i in number){
//     console.log(i)
// }  

// console.log("in 2");
// //valor 
// for(let i in number){
//     console.log(number[i])
// }  

// console.log("in 3");
// //ambos
// for(let i in number){
//     console.log(i , number[i])
// }  

// console.log("tradicional 4");
// for(let i =0; i < number.length; i++){
//     console.log(i ,number[i])
// }


// console.log("of 5");
// //valor
// for(let x of number){
//     console.log(x)
// }


//---------------------------------------------------------------------------- 


// 3. Crie uma solução utilizando o comando `while` um sistema que leia nome de países. A cada loop, identifique, por meio de uma função,
//  se esse país faz parte da América do Sul e apresente essa informação para o usuário. Em seguida, pergunte se ele deseja continuar (s para continuar, 
//     qualquer outra tecla para parar).


// let simounao = "s";


// function identificadorPais(pais){
//   if (pais == "Brasil" || pais =="Argentina" || pais == "Chile" ){
//    return console.log("Este país faz parte da América do Sul.")
//   }else {
//    return console.log("Este país não faz parte da América do Sul.")
//   }
// };



// console.log("----- PAÍS NA AMÉRICA DO SUL -----");

// while(simounao == "s"){

//   let pais = prompt("Digite o nome de um país: ");

//   identificadorPais(pais);

//   simounao = prompt("Deseja continuar? (s/n): ");
// };




// 4. Desenvolva um sistema que através do comando `do while` identifique se o número digitado é impar. Enquanto o usuário digitar um número 
// diferente de zero, continue a executar o loop.




//let numberWhile = 0;
// do{

//   let number = Number(prompt("Digite um número: "));
//   numberWhile = number;

//   if (number % 2 == 0 ){
//     console.log("Número PAR");
//   }else{
//     console.log("Número ÍMPAR");
//   }
// }while(numberWhile != 0);




//5.Crie um algoritmo que imprima através de um laço de repetição while e for uma contagem de 1 até 10 crescente e decrescente.


// let i = 1;

// while(i <= 10){
//   console.log(i);
//   i += 1;  
// }


// for(i = 10; i >0; i--){
//   console.log(i);
// }







//-----------------------------------------------------
// Aula 9 : Array:
//-----------------------------------------------------




// 1. Desenvolva uma solução que preencha dinamicamente através do comando `for` preencha um array de nomes de seus familiares.


// console.log("----- FAMÍLIA ------");

// let familia = []

// let qtde = Number(prompt("Informe a quantidade de familiares que deseja cadastrar: "));

// for(i=0;i < qtde; i++){
//     let nome = prompt("Infome o "+ (i+1)+ "º nome: ");
//     familia[i] = nome;
// }

// console.log(familia);



// 2. Desenvolva uma solução que contenha um array pré definido com valores de itens de supermercado. Solicite o usuário os próximos 3 itens que 
// serão adicionados e os coloque ao final da listagem. Em seguida, imprima a lista final na tela.




// console.log("------- LISTA DE SUPERMERCADO -------");

// const lista = [5.35, 10.87, 12.10, 7.00]

// console.log(lista);

// let simounao = "s";


// while(simounao == "s"){

// let qtde = Number(prompt("Informe a quantidade que deseja cadastrar: "));

//  for(i=0;i < qtde; i++){
//     let valor = Number(prompt("Infome o "+ (i+1)+ "º valor: "));
//     lista.push(valor);
//   }

//   simounao = prompt("Deseja continuar cadastrando (s/n) ");

// };

// console.log("Lista Atualizada: ", lista);






// 3. Crie uma solução que contenha uma listagem pré definida de alunos de uma turma e suas notas. Em seguida, solicite ao usuário que escreve 
// os próximos 3 alunos e suas respectivas notas. Adicione esses elementos (objetos) ao array no começo da listagem e imprima a lista na tela. 
// Em seguida, remova os 3 últimos elementos da listagem e imprima o resultado final e o tamanho da listagem.




// console.log("------ LISTA DE ALUNOS ------");

// const nomes = ["Anderson", "Luan", "Jow"]
// const notas = [9, 10, 7]

// function listaTurma (){
//     console.log(nomes);
//     console.log(notas);
   
// }

// let qtde = Number(prompt("Informe a quantidade de alunos que deseja cadastrar: "));

// if (qtde > 0 ){

//     for(i=0; i < qtde; i++){
//         let nome = prompt("Informe o "+ (i+1)+ "º nome: ");
//         nomes.unshift(nome);
//         let nota = Number(prompt("Informe o valor da  "+ (i+1)+ "º nota: "));
//         notas.unshift(nota);
//     }

//     listaTurma();


//     let qtdeRemover = Number(prompt("Informe a quantidade de alunos que deseja remover: "));

//     if (qtdeRemover > 0){
        
//         for(i=0; i< qtdeRemover; i++){
//             nomes.pop()
//             notas.pop()
//         }

//         listaTurma();
//     }

// }else{
//     console.log("Bye");
// }


//4.Desenvolva um algoritmo que leia a nota de 7 alunos e salve os valores nas posições de um array. Em seguida, apresente cada uma das notas inseridas.



// console.log("------- NOTAS DE 7 ALUNOS ------- ");
// const notas = []

// for(i=0; i <7; i++){
//     let nota = Number(prompt("Informe a "+(i+1)+" º nota: "));
//     notas[i] = nota;
// }

// notas.map((Element, i) => {
//     console.log(i, Element);
// })


//5.Escreva um programa que contenha um vetor que possua 5 nomes diferentes. Em seguida, por meio de um laço de repetição, solicite ao 
//usuário que insira um nome e, em seguida, escreva se o nome está presente ou não no vetor e em qual posição.


// console.log("------- NOME NA LISTA? -------");

// const names = ['Ander', 'Jow', 'Lucas', 'Gabriela', 'Julia']

// let simounao = "s";

// while(simounao == "s"){

//     let name = prompt("Informe um nome: ");

     
//     console.log("O nome está na lista: ", names.includes(name));




//     simounao = prompt("Deseja continuar? (s/n)");  

// }


// let c = names.map((Element) =>{
//     return Element;
// })

// console.log(c);





//6.Desenvolva um programa que tenha uma lista de compras 4 itens de tecnologia que você deseja comprar futuramente. Em seguida, 
// por meio do terminal, escreva mais 2 elementos que deseja inserir nessa listagem. Pela função splice, remova os 2 últimos elementos e 
// adicione esses dois novos. Ao final, imprima a nova listagem na tela.





// function addElemento(newProduct, posicaoInicial){

//    return lista.splice(posicaoInicial, 0, newProduct);

// }


// const lista = ['monitor', 'teclado', 'mouse', 'placa de vídeo']

// console.log(lista);


// let simounao = prompt("Deseja adicionar mais itens a lista (s/n): ");


// if (simounao == "s"){

//     let posicaoInicial = Number(prompt("Com base no indice da array, escolha um número para adicionar o próximo item na sequencia: "));

//     let newProduct = prompt("Informe o produto que deseja: ");

//     addElemento(newProduct, posicaoInicial);


//     simounao = prompt("Deseja adicionais mais itens a lista (s/n): ");

//     console.log(lista);

// }else{
//     console.log("bye");




//7.Desenvolva um programa que tenha uma lista de desejos com  4 itens de casa que você deseja comprar futuramente. Em seguida, 
// separe os items em dois arrays, um para intens de cozinha e outros para o quarto usando o método slice.


// let listaDeCasa = ['televisão', 'abajur', 'panelas de aluminium', 'geladeira']

// let listaQuarto = listaDeCasa.slice(0,2)

// console.log(listaQuarto);

// let listaCozinha = listaDeCasa.slice(2)

// console.log(listaCozinha)

// console.log(list)






//-----------------------------------------------------
// Aula 10 & 11  : Interação com Array:
//-----------------------------------------------------




// 1.Escreva um programa que contenha uma listagem com ficha de funcionários, contendo nome e valor do salário. Utilizando o comando for, 
// passe por cada um dos elementos do array, e dê um bônus salarial de 5% a mais para cada funcionário.



// console.log('----- LISTA DE FUNCIONÁRIOS -----');

// const funcionarios = [{
//     nome: 'Anderson',
//     salario: 500,
//     salarioAtualizado:undefined
//     },{
//         nome: 'Luana',
//         salario: 700,
//         salarioAtualizado:undefined
//     },{
//         nome: 'Viktor',
//         salario: 900,
//         salarioAtualizado:undefined
//     }
// ];


// // for(let i=0; i < funcionarios.length;i++){
// //     console.log(funcionarios[i])
// // }

// for(let i=0; i < funcionarios.length;i++){

//     funcionarios[i].salarioAtualizado = (funcionarios[i].salario * 0.05) + funcionarios[i].salario
//     console.log('\n',funcionarios[i])
// }




// 2. Utilizando o comando `for of` passe por cada elemento de uma listagem de clientes de uma empresa. Cada dado de cliente deve conter: nome do cliente, 
//  dois saldos a receber (saldo1, saldo2). Calcule o saldo total de cada cliente, adicione essa nova propriedade ao elemento respectivo da lista. Ao 
// final, imprima toda listagem na tela.



// const funcionarios = [{

//         nome: 'luan',
//         saldo1: 200,
//         saldo2: 500,
//     },{
//         nome: 'louis',
//         saldo1: 500,
//         saldo2: 300, 
//     }
// ];

// for(let i of funcionarios){
//     console.log(i);
// };

// for(let i of funcionarios){

//     i.total = i.saldo1 + i.saldo2

//     console.log(i);
// };

// for (let i of funcionarios){
//     console.log("sobrenome do " + i+1 + " º funcionário. ");
//      i.sobrenome = prompt("Informe seu sobrenome: ");

//      funcionarios.splice (1,2, i.sobrenome);
    
// }

//console.log(funcionarios);



//const frutas = ['pera', 'maça', 'abacaxi'];
//console.log(frutas);


// const frutas2 = [{nome:'pera', cor: 'verde', peso:200}];

// frutas2.splice(0,frutas2.nome = "mamão");

// console.log(frutas2);




// var person = { name: 'Max', age: 23 };
 
// person.sex = 'Male';
// console.log(person);
 
/*
    Resultado: { name: 'Max', age: 23, sex: 'Male' }
*/


// const person = [{ nome: 'Max', idade: 23 },{nome: 'lucas', idade: 12}];

// console.log(person);

// for(let i of person){
//     i.sex = 'Male'
// }

// person.forEach(function(item) {
//     item.sex = 'Male';
//   });
  
//console.log(person);


// 3. Crie um algoritmo que tenha uma listagem com de carros , contendo o nome e valor dos veículos, e deixe a listagem ordenada de 
// acordo com o valor *(sort)*. Em seguida, pela função `filter`, separe em dois novos arrays os veículos que tem valor abaixo e acima de 10mil reais. 
// Imprima na tela as duas listagens.



// const listaCarros2 =[{
//     carro: 'gol',
//     valor: 20000,
// },{
//     carro: 'corsa',
//     valor: 10000,

// },{
//     carro: 'polo',
//     valor: 50000,
// },{
//     carro: 'uno mille',
//     valor: 5000,
// }];

// ordem alfabética com número

// listaCarros2.sort(function(e1, e2){
//    return e1.valor - e2.valor
// });


// ordem alfabética

// listaCarros2.sort((a,b) => (a.carro> b.carro) ? 1 : ((b.carro> a.carro) ? -1 : 0));

// console.log(listaCarros2);


// const listaAbaixo = listaCarros2.filter(function(item){
//     return item.valor <=10000
// });
    

// const listaAcima = listaCarros2.filter(function(item){
//     return item.valor >10000
// });

// console.log("       ----- LISTA DE CARROS -----\n",listaCarros2);
// console.log("   ----- LISTA DE CARRO ABAIXO DE 10K -----\n",listaAbaixo);
// console.log("   ----- LISTA DE CARRO ACIMA DE 10K -----\n",listaAcima);



// 4. Crie um programa que solicite ao usuário entre com 2 nomes de jogadores e a quantidade de gols e assistências na temporada. Em seguida, através
//  do comando `forEach`, imprima na tela a quantidade total de lances para gol (gols + assistência) esse jogador contribuiu.

// console.log("----- TABELA DE JOGADORES -----");

// const jogadores = [{
//     nome: prompt("Informe seu nome:"),
//     gols: parseInt(prompt("Quantidade de gols na temporada: ")),
//     assitencia: parseInt(prompt("Quantidade de assistências na temporada: ")),
// },{
//     nome: prompt("Informe seu nome:"),
//     gols: parseInt(prompt("Quantidade de gols na temporada: ")),
//     assitencia: parseInt(prompt("Quantidade de assistências na temporada: ")),
// }];

// soma usando for in 
//  for(let i of jogadores){
//     i.lances = i.gols + i.assitencia
//     console.log(i);
//  };


// soma usando o forEach
//  jogadores.forEach(function(i){
//     i.lances = i.gols + i.assitencia
//     return console.log(i);
//  });


// 5. Escreva um sistema que o usuário insira as notas do trimestre. Em seguida, através do comando sort, ordene a listagem de notas.


// console.log("----- NOTAS FACULDADE ------");

// const notas = [];

// const quantidadeDeNotas = parseInt(prompt("Informe a quantidade de notas que deseja add: "));

// for(let i= 0; i<quantidadeDeNotas; i++){
//     let nota = parseInt(prompt("Informe sua nota: "));
//     notas[i] = nota
// };

// console.log("\n lista de notas");
// console.log(notas);

// notas.sort(function(a,b){return a-b}); // quando utilizamos number para ordenar precisamos usar uma função para ajudar o metodo.

// console.log("\n lista de notas ordenadas");
// console.log(notas);





// 6. Desenvolva uma solução em que o usuário insira a ficha atlética de 3 alunos de uma academia, com nome, peso e altura. Em seguida, imprima a 
//lista ordenada pela altura dos alunos, de forma decrescente e uma segunda lista pelo peso, de forma crescente.




// console.log("----- FICHA TÉCNICA  ------\n");

// const fichaTecnica = [{
//     nome: prompt("Informe seu nome:"),
//     altura: parseInt(prompt("Informe sua altura: ")),
//     peso: parseInt(prompt("Informe seu peso atual: ")),
// },{
//     nome: prompt("Informe seu nome:"),
//     altura: parseInt(prompt("Informe sua altura: ")),
//     peso: parseInt(prompt("Informe seu peso atual: ")),
// },{
//     nome: prompt("Informe seu nome:"),
//     altura: parseInt(prompt("Informe sua altura: ")),
//     peso: parseInt(prompt("Informe seu peso atual: ")),
// }];


// console.log("---- ORDENADO POR ALTURA (DECRESCENTE) ----\n");

// fichaTecnica.sort(function(a,b){
//     return b.altura + a.altura
// })

// console.log(fichaTecnica);

// console.log("---- ORDENADO POR PESO (CRESCENTE)----\n");

// fichaTecnica.sort(function(a,b){
//     return a.peso - b.peso
// })

// console.log(fichaTecnica);



// 7. Utilizando o exercício anterior, utilize a função `map` para criar um novo array que contenha somente o nome dos alunos e imprima o resultado
 //na tela.



// const fichaTecnica = [{
//     nome: prompt("Informe seu nome:"),
//     altura: parseInt(prompt("Informe sua altura: ")),
//    peso: parseInt(prompt("Informe seu peso atual: ")),
// },{
//     nome: prompt("Informe seu nome:"),
//    altura: parseInt(prompt("Informe sua altura: ")),
//    peso: parseInt(prompt("Informe seu peso atual: ")),
// },{
//     nome: prompt("Informe seu nome:"),
//    altura: parseInt(prompt("Informe sua altura: ")),
//     peso: parseInt(prompt("Informe seu peso atual: ")),
// }];

// console.log("---- NOMES----\n");
// const novaFicha = fichaTecnica.map(function(a){
//     return a.nome
// });


// console.log(novaFicha);




// 8. Utilizando o exercício 6, utilize a função `filter` para imprimir um array com os alunos que tenham mais de 180 de altura.

//  console.log("----- FICHA TÉCNICA  ------\n");

//  const fichaTecnica = [{
//     nome: prompt("Informe seu nome:"),
//      altura: parseInt(prompt("Informe sua altura: ")),
//      peso: parseInt(prompt("Informe seu peso atual: ")),
// },{
//     nome: prompt("Informe seu nome:"),
//      altura: parseInt(prompt("Informe sua altura: ")),
//     peso: parseInt(prompt("Informe seu peso atual: ")),
//  },{
//       nome: prompt("Informe seu nome:"),
//       altura: parseInt(prompt("Informe sua altura: ")),
//       peso: parseInt(prompt("Informe seu peso atual: ")),
//  }];

// const newArray = fichaTecnica.filter (function(a){
//     return a.altura > 180;
// });


//  console.log(newArray);




 
// 9. Desenvolva um programa que o usuário insira um número ilimitado de itens de supermercado, contendo os valores e nome de cada item.. Através da 
// função `reduce`, calcule o valor total da compra e apresente o resultado na tela.


//  let sim_ou_nao = "s";

//  console.log("------- ADD PRODUTOS -------");

//  const listaDeCompras = [];

//  addProdudo();

//  function addProdudo(){  

//         const nome = prompt("Nome do Produto: ");    
//         const valor = parseFloat(prompt("Valor do Produto: "));
     
    
//         listaDeCompras.push({nome: nome, valor: valor});
//         decisao(sim_ou_nao);

// };

// function decisao(sim_ou_nao){
//     sim_ou_nao = prompt("Gostaria de add mais um produto? (s/n): ");

//     if(sim_ou_nao =="s"){
//         return addProdudo();
//     }else{
//         console.clear()
//         return console.log("---- LISTA DE COMPRAS ----\n",listaDeCompras);
//     }
// };


// console.log("---- RESUMO DA COMPRA ----");

// const valorTotal = listaDeCompras.reduce(function(total,item){
//     return total + item.valor
// }, 0); //com array de objetos ...o total precisa ser declarado c/ valor inicial 

// console.log("\nValor total da compra R$", valorTotal );



// 10. Utilizando o exemplo anterior, cheque se na listagem todos os itens tem um valor acima de R$10. Dica: método `every`. Imprima o resultado na tela.


// const checkValor = listaDeCompras.every(function(item){ // método every trás um resultado boolean referente a TODOS os itens.
//     return item.valor > 10
// })

// console.log("\nTodos os produtos são acima de R$10,00: ", checkValor);


// 11. Utilizando o exercício 8, averigue se algum elemento tem o valor acima de R$50 (função `some`). Imprima o resultado na tela.


// const checkValorUnitario = listaDeCompras.some(function(item){
//     return item.valor > 50
// })

// console.log("\nTem algum item maior que R$50,00: ", checkValorUnitario);// método some trás um resultado boolean verifica se contem um item ou nao.


// 12. Ainda utilizando o exercício de número 8, busque se há na lista algum elemento que seja “Arroz”, por meio da função `find`. 
// Imprima o resultado na tela.


// const checkItem = listaDeCompras.find(function(item){
//     return item.nome =="Arroz"
// })


// console.log("\nMétodo busca item da lista: ", checkItem);


// 13. Encontre no exercício 8 o index do elemento “Sabão”. Caso não haja (index -1), imprima a informação na tela. Use o método findIndex


// const checkIndex = listaDeCompras.findIndex(function(item){
//     return item.nome ==="Leite"
// })

// console.log("\nQual o index que se encontra o Leite: ", checkIndex);







//-----------------------------------------------------
// Aula 12 : Métodos de Cada Type (String e Number):
//-----------------------------------------------------





// 1. Crie uma solução na qual o usuário irá inserir o cadastro de 5 participantes de um evento, contendo nome e sobrenome e tipo de ingresso 
// (Pista Gold, Pista Premium, Camarote). Utilizando o conceito do array.map, adicione as seguintes propriedades ao cadastro de cada participante: 
//     1. Nome completo (utilizando interpolação de strings)
//     2. Tipo de ingresso pista (string includes)
//     3. Tipo de ingresso formatado (toUpperCase e trim)





// const listaUsuario = [];

// let quantidadeUsuario = Number(prompt("Informe quantos usuários deseja cadastrar: "));

//      for(let i = 0; i < quantidadeUsuario; i++){

//         const nome = prompt("Escreva seu nome: ");
//         const sobrenome = prompt("Escreva seu sobrenome: ");

//         console.log("\nTIPOS DE INGRESSO: (pista gold, pista premium, camarote)");
//         const ingresso = prompt("Digite o tipo do seu ingresso: ");


//          listaUsuario.push({Nome: nome, Sobrenome: sobrenome, Ingresso: ingresso});
//      };


// const listaUsuarioAtualizada  =  listaUsuario.map(function(item){
//     return {
//         ...item,
//         nomeCompleto: (`${item.Nome} ${item.Sobrenome}`),
//         tipoPista: item.Ingresso.includes("camarote"),
//         toUpperCase: item.Ingresso.toUpperCase(),
//         trim: item.Ingresso.trim(), 
        
//     }
// });

    
// console.log(listaUsuarioAtualizada);




// 2. Desenvolva um sistema que o usuário irá cadastrar um orçamento de obra. Para isso, será necessário inserir os dados no seguinte padrão:
//     1. Material
//     2. Custo
    

//     O sistema deverá perguntar repetidas vezes até o usuário desejar finalizar.
//     Ao finalizar, apresente a quantidade de material que inclua a palavra “cimento”, calcule o valor total da obra e formate também o valor 
//     total seguindo a formatação de moeda no JavaScript
    



// let yes_or_not = "s";

// const listaDeCompras = [];

// console.log("----- LISTA DE COMPRAS -----");

// while(yes_or_not =="s"){

//     const material = prompt("Produto: ");

//     const valor = Number(prompt("Valor: "));

//     listaDeCompras.push ({ Produto: material, Preço: valor});

//     yes_or_not = prompt("Desaja add mais produtos? (s/n)");

// }
// console.clear();

// console.log("----- CUPOM FISCAL ----- ",listaDeCompras);

// let counter = 0;

// for (const obj of listaDeCompras) {
//   if (obj.Produto === "cimento") counter++;
// }

// counter <=1 ? console.log(`\nQuantidade de cimento: ${counter} unidade`) : console.log(`\nQuantidade de cimento: ${counter} unidades`);



// const somaTotal = listaDeCompras.reduce(function(total, item){
//   return total + item.Preço
// }, 0)


// //somaTotal <=1 ? console.log(`\nValor total: R$${somaTotal.toFixed(2)} real`) : console.log(`\nValor total: R$${somaTotal.toFixed(2)} reais`) // outro formato de mostrar o resultado abaixo


// let total = new Intl.NumberFormat("pt-BR",{ style:"currency", currency: "BRL",}).format(somaTotal);

// total <= 1 ? console.log(`\nValor total da compra: R$${total} real`) : console.log(`\nValor total da compra: R$${total} reais`) 






// 3. Desenvolva um sistema que solicite ao usuário o nome, sobrenome, idade,  faculdade e salário de 4 pessoas. Utilizando a interação de arrays, 
// crie um novo array que contenha no cadastro de cada pessoa, além das informações cadastradas, as inicias da pessoa
//  (1 letra do nome e 1 letra do sobrenome), se a formação é engenharia ou não, e formate o salário em duas casas decimais.



// let sim_ou_nao = "s";

//  console.log("------- ADD PRODUTOS -------");

//  const listaDeCompras = [];

//  addProdudo();

//  function addProdudo(){  

//         const nome = prompt("Nome do Produto: ");    
//         const valor = parseFloat(prompt("Valor do Produto: "));
     
    
//         listaDeCompras.push({nome: nome, valor: valor});
//         decisao(sim_ou_nao);

// };

// function decisao(sim_ou_nao){
//     sim_ou_nao = prompt("Gostaria de add mais um produto? (s/n): ");

//     if(sim_ou_nao =="s"){
//         return addProdudo();
//     }else{
//         console.clear()
//         return console.log("---- LISTA DE COMPRAS ----\n",listaDeCompras);
//     }
// };





// const listaUsuario = [];


// function listaDeUsuario(){
//   console.log("----- LISTA DE USUÁRIOS CADASTRADOS -----");

//   console.log(listaUsuario);

//   console.log("-----------------------------------------");

//   const voltarMenu = prompt("Deseja voltar ao menu ou sair? (m - menu/ s - sair)");
  
//   console.clear();

//   voltarMenu == "m" ? menu() : console.log("Bye");

// };



// function menuDecisao(decisao){

//   if(decisao == 1){
//      addIUsuario()
//   }
//   else if (decisao == 2){
//     listaDeUsuario()
//   }
//   else if (decisao == 3){
//     console.log("Bye Bye");
//   }
//   else {
//     console.log("Número errado, digite corretamente");
//      menu();
//   };

// };



// function decisaoCadastro(){

//   const newCadastro = prompt("Deseja cadastrar outro usuário? (s/n)");

//   newCadastro == "s" ? addIUsuario() : menu();

// };



// function addIUsuario(){

//   console.clear();

//   console.log("-----CADASTRO DE USUÁRIO-----");

//   const nome = prompt("Informe seu nome: ");

//   const sobrenome = prompt("Informe seu sobrenome: ");

//   const idade = Number(prompt("Idade: "));

//   const faculdade = prompt("Qual curso da faculcade realiza:");

//   const salario = parseFloat(prompt("Informe seu salário: "));

//   listaUsuario.push ({ nome: nome, sobrenome: sobrenome, idade: idade, faculdade: faculdade, salario: salario});

//  decisaoCadastro();

// };



// menu();

// function menu(){

//   console.log("----- BEM VINDO AO MENU DE CADASTRO -----");

//   console.log("Escolha o número desejado:","\n(1) - CADASTRAR USUÁRIO\n", "\n(2) - APRESENTAR LISTA DE USUÁRIO\n", "\n(3) - SAIR\n");

//   console.log("-----------------------------------------");

//   decisao = parseInt(prompt("Informe o número:"));

//   console.clear();

//   menuDecisao(decisao)

// };




       