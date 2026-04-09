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

//16.