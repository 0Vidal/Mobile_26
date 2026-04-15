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
