class Carro {
    // Atributos o propiedades
    private marca: string;
    private modelo: number;
    private velocidad: number;

    // Método Constructor
    constructor(marca:string, modelo:number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    // Acelerar el carro
    public acelerar(velocidadIncremento: number):void  {
        this.velocidad += velocidadIncremento;
        console.log('El '+this.marca+ ' está acelerando a '+this.velocidad+ ' km/h');
    }
}

let carroMartha = new Carro("Chevrolet", 2023);

carroMartha.acelerar(80);