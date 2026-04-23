//1.Exiba a mensagem "Olá Mundo" no console.
console.log("Olá Mundo!");

//2.Crie uma variável com seu nome e exiba um valor no console.
let nome = "Vinícius";
console.log(nome); 

//3.Some dois números e exiba o resultado
n1 = 20;
n2 = 20;
let adicao = n1 + n2; 
console.log(adicao)

//Resolução do professor
let soma = 10 + 5;
console.log(soma);

//4.Subtraia dois números e exiba o valor.
let sub = 10 - 5;
console.log(sub);

//5.Descubra o resto da divsão de um número por outro.
let div = 15 % 5;
console.log(div);

//6.Crie uma variável booleana (true ou false) e exiba o valor.
let verdade = true;
console.log("Verdade:", verdade);

//7.Verifique se um número é maior que outro e exiba o resultado.
n1 = 10;
n2 = 5;
if(n1 > n2){
    console.log("O número é maior");
}
else{
    console.log("O número é menor");
}

//Resolução o Professor.
let MaiorQue = 18 > 11;
console.log(MaiorQue);

//8.Crie duas variáveis com algum valor e exiba a concatenação
let var1 = "Valor:";
let var2 = 20;
console.log(`teste ${var1} ${var2}`);

//9.Descubra o tipo de uma variável.
let num = 1;
console.log(typeof num); //typeof mostra o tipo da variável

//10.Converta numero para string.
let num1= 10;
console.log(String(num1));

//11.Converta string para número.
let texto = "123";
console.log(Number(texto));

//Laços de repetição

//12.Exiba no cnsole numero de 0 a 10.
for(let i = 0; i <= 10; i++){
    console.log(i);
};

//13.Exiba apenas números pares até 20.
for(let i = 0; i <= 20; i+=2){
    console.log(i)
};

//14.Mostre no console números de 10 até 1.
for(let i = 10; i >= 1; i--){
    console.log(i)
};

//15.Some números de 1 a 5.
let somaLoop = 0;
for(let i=1;i<=5; i++){
    somaLoop+=i;
    console.log("valor de i " +i+ " valor de somaLoop"+somaLoop );
}
console.log(somaLoop);

//16.Faça a tabuada do 3.
let mult = 3;
for(let i = 0; i <= 10; i++){
    console.log(`${i} X ${mult} = ${i*mult}`);

};

//17.Conte quantos números são maiores que 5.
let lista = [2,6,8,1,3];
let cont = 0;
for(let i=0; i<lista.length; i++){
    if(lista[i]>5)cont++;

}
console.log(cont);

//18.Percorra a string letra por letra.
let palavra = "JFRS";
for(let i=0; i<palavra.length; i++){
    console.log(palavra[i]);
};

//19.Pare um loop quando encontrar o número 7 de 0 a 10.
for(i=0; i<=10; i++){
    if(i === 8)break;
    console.log(i);
};

//20. Crie uma função que exibe uma mensagem
function menssagem(){
    console.log("Olá");
}
menssagem();

//21. Crie uma função que multiplica 2 numeros
function multiplicacao(a,b){
    return a * b;
}
console.log(multiplicacao(2,3));

//22. Crie uma funcao que verifica se é par ou impar
function analise(num){
return num % 2===0 ? "par" :"impar";

}
console.log(analise(11))

//23. Crie uma função que retorne o dobro
function Dobro(a){
    return 2 * a;
};
console.log(Dobro(5));

//24. Crie uma função que some elementos de um array.
function soma_array(arr){
    total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    };
    return total;

}
console.log(soma_array([2,5,6]));

//====================== ATIVIDADES COM IF =====================================

//11. Verifiqque se o número 15 é positio e exiba uma mensagem
let numero = 15;
if (numero > 0){
    console.log("Positio");
}
else{
    console.log("Negativo");
};

//12. Verifique se uma pessoa com 17 ano é maior de idade
let idade = 17;
if(idade<=18){
    console.log("Menor de idade")
}
else{
    console.log("Maior de idade")
};

//==================== ATIVIDADES COM ARRAY ===================================

//31.Crie um array com os numeros 10, 20, 30, 40 e exiba todos.
let numeros1 = [10, 20, 30, 40];
console.log(numeros1);

for(let i=0;i<numeros1.length;i++){
    console.log(numeros1[i])
};

//32. Crie um array com 5 frutas e exiba a primeira fruta.
let frutas = ["banana", "maça", "abacate", "mamão", "manga"];
console.log(frutas[0]);

//33. Adicione o número 50 no final o array [10,20,30,40].
let numeros2 = [10,20,30,40];
numeros2.push(50);
console.log(numeros2);

//34. Remova o último elemento do array [1, 2, 3, 4, 5].
let arr2 = [1, 2, 3, 4, 5];
arr2.pop()
console.log(arr2);

//35. Exiba quantos elementos tem no array [5, 10, 15, 20].
let arr3 = [5, 10, 15, 20];
console.log(arr3.length);

//36. Some todos os números do array [2, 4, 6, 8].
let ValoresArray = [2, 4, 6, 8];
SomaArray = 0;
for(let i=0;i<ValoresArray.length;i++){
    SomaArray += ValoresArray[i];
    
}; 
console.log(SomaArray);

// 37. Multiplique cada elemento do array por 2.
let array3 = [1,2,3,4];
let multi = []
for(let i = 0; i < array3.length; i++){
    multi.push(array3[i] * 2);
};
console.log(multi);

// 38. Verifique se a fruta "Laranja" existe no array ["maçã","banana","uva"].
let fruta = ["maçã","banana","uva"];
for(i = 0; i<fruta.length; i++){
    if(fruta[i] == "Laranja"){
        console.log(`O array ${fruta} tem laranja`)
    }
    else{
        console.log(`O array ${fruta} não tem laranja`)
    };
};

//39. Exiba um por um dos elementos do array ["azul","verde","amarelo"]
let arrayCores = ["Azul","Verde","Amarelo"];
for(i=0;i<arrayCores.length; i++){
    console.log(arrayCores[i]);
};

//40. Exiba o ultimo elemento do array [100,200,300,400,500]
let numeros = [100,200,300,400,500];
let ultimo = numeros.length -1;
console.log(`O ultimo números é ${numeros[ultimo]}`);

// 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3,4 na segunda linha
console.log("\n Criar matriz 2x2")
let matriz2x2 = [
    [1,2],
    [3,4]
];
console.log(matriz2x2);

// 42: Exiba o elemento da primeira linha 1, coluna 2 da matriz [[5,6],[7,8]]
let matriz56 = [
    [5,6],
    [7,8]
]
console.log(`Elemento da linha 1, coluna 2: ${matriz56[0][1]}`)

// 43: Exiba todos os elementos da matriz [[1,2,3], [4,5,6]]
let matriz = [
    [1,2,3],
    [4,5,6]
];

for(i=0;i<matriz.length;i++){
for(j=0;j<matriz[i].length;j++){
    console.log(`Elementos [${i}] [${j}] = ${matriz[i][j]}`);
}
}

// 44: Some todos os números da matriz [[2,4], [6,8]]
let matrizSoma = [
    [2,4],
    [6,8]
];
let somaMatriz = 0;
for(let i = 0; i < matrizSoma.length; i++){
    for(let j = 0; j <matrizSoma[i].length; j++){
        somaMatriz += matrizSoma[i][j];
    };
};
console.log(`Soma dos elementos ${somaMatriz}`);

// 45: Crie uma matriz 3x3 com números com números de 1 a 9
let matriz3x3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz3x3);

// 46: Exiba os elementos da diagonal principal da matriz [[1,2,3], [4,5,6], [7,8,9]]
let diag =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0;i<diag.length;i++){
    console.log(diag[i][i]);
};

/*EXERCÍCIO 1 (FÁCIL)
Verifique se um número é positivo ou não*/
let numero = 5;
let resultado = numero > 0 ? "Positivo" : "Negativo";
console.log(`O número ${numero} é: ${resultado}`);

/*EXERCÍCIO 2 (FÁCIL)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/
let idade = 15;
let votar = idade >= 16 ? "pode votar" : "não pode votar";
console.log(`Se sua idade foi igual à ${idade} você ${votar}`);

/*Outra resolução:

if(idade>=16){
    console.log("Pode votar");
}else{
    console.log("Não pode votar");
};*/

/*EXERCÍCIO 3 (FÁCIL)
Verifique se o número é par ou impar.
- Se par, retorne "Par"- Se impar, retorne "Ímpar"*/
let numero1 = 15;
let Par_Ímpar = numero1 % 2 === 0 ? "Par" : "Ímpar";
console.log(`O número ${numero1} é: ${Par_Ímpar}`);

/*EXERCÍCIO 4 (FÁCIL)
Crie uma verificação de nível de acesso.
- Se nível for "adimin", retorne "Acesso total"- Caso contrário, retorne "Acesso restrito"*/
let nivel = "visitante";
let acesso = nivel === "adimin" ? "Acesso total" : "Acesso restrito";
console.log(`Seu nível de acesso é de (${nivel}) então você tem (${acesso})`);

/*EXERCÍCIO 5 (MÉDIO-FÁCIL) 
Aplique desconto em um produto.
-Se preço > 100, aplique 10% de desconto (multiplicar po 0.9)
-Caso contrário, mantenha o preço original*/
let preco = 120;
let promo = preco > 100 ? preco*0.9 : "não tem";
console.log(`Sua compra foi de R$${preco}, com desconto: ${promo}.`);

/*EXERCÍCIOS 6 (MÉDIO-FÁCIL
Classifique a situação do aluno baseado na média.
-Se nota >= 7, retorne "Aprovado"
_Caso contrário, "Reprovado"*/
let nota = 7.5;
let statusAluno = nota > 7 ? "aprovado" : "reprovado"; 
console.log(`Sua nota: ${nota}, você foi ${statusAluno}`);

/*EXERCÍCIO 7 (Médio)
Verifique se um número é par e maio que 10.
-Se sim, retorne "Par, maior que dez"
-Se não, "Não" */
let num2 = 12;
let parMaior = num2 % 2 === 0 && num2 > 10 ? "Par Maior que 10" : "Não é maior que 10";
console.log(`O número ${num2} é: ${parMaior}`);

/*EXERCÍCIO 8 (MÉDIO
Classífique o número em positivo, negativo ou zero.
-Se > 0: "Positivo"
-Se < 0: "Negativo"
-Se = 0: "Zero"*/
let n = 0;
let zero = n > 0 ? "Positivo" : n < 0 ? "Negativo" : "Zero";
console.log(`O número ${n} é: ${zero}`);

/*EXERCÍCIO 9 (MÉDIO)
Simule um login simples
-Se usuário dor "adimin" E senha for "123", retorne "Login Ok"
-Caso contrario, "Falha no login"*/
let tipo = "adimin";
let senha = 123;
let login = tipo === "adimin" && senha === 123 ? "Login Ok" : "Falha no login";
console.log(`Seu tipo é (${tipo}): ${login}`);

/*EXERCÍCIO 10 (MÉDIO)
Classifique a pessoa por idade:
-Menor que 12: "Criança"
-Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/
let idades = 11;
let tipos = idades < 12 ? "criança" : idades <= 17 ? "adolescente" : idades <= 59 ? "adulto" : "idoso";
console.log(`Sua idade é ${idades}, você é ${tipos}`);

// ========================== ATIVIDADES COM OBJETOS =========================
// 51: Crie um objeto pessoa com nome "Ana" e idade 25
let pessoa = {
    nome: "Ana",
    idade: 25
};
console.log(pessoa);

// 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
let usuario = {
    nome: "Carlos",
    cidade: "São Paulo"
};
console.log(`Nome ${usuario.nome}`);

// 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
let estudante={
    nome: "Maria",
    idade: 20
};
console.log("antes", estudante);
estudante.curso = "matemática";
console.log("depois", estudante);
