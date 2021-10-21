class auriculares{
    constructor(titulo,tipo,color) {
        this.title = titulo;
        this.type = tipo;
        this.color = color;
    }
    leer(){
        console.log("Este producto es de la categoría " + (this.title) + " modelo " + (this.type));
    }
}
let producto1 = new auriculares("Auriculares", "HyperX Cloud II", "Negro");
producto1.leer();