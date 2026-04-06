let carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2020,
    ligar:function(){
        console.log("Ligou.. Só dirigir pra felicidade");
    },
    MostrarInfo: function(){
        console.log(`Marca: ${this.marca},\nModelo: ${this.modelo}`)
    }



};
carro.ligar();      
carro.MostrarInfo();