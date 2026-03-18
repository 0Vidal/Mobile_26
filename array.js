let matriz = [
    ['Verde',48,78],
    ['Branco',6,7],
    ['Preto',8,9]
]

/*for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz.length; j++){
        console.log(matriz[i] [j]);
    }
}*/


quantidade = 0 

for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz.length; j++){
        quantidade++;
    }
}
console.log(quantidade)
