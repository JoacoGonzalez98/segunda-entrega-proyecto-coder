// class Producto {
//     constructor(nombre, precio, detalle, cantidad) {
//         this.nombre = nombre;
//         this.precio = parseFloat(precio);
//         this.detalle = detalle;
//         this.cantidad = cantidad;
//         this.stock = true;
//         }
//         sumarIva() {
//             return this.precio * 1.21;
//         }

//         Vender() {
//             this.disponible = false;
//         }
//         precioSugerido() {
//             return this.precio * 1.21 * 1.25;
//         }
//     }

// let arrayProductos = [];
// do{
//     let comprobacion = prompt('Ingrese un nombre del producto o "fin" para terminar de agregar');
//     if (comprobacion === "fin"|| comprobacion === "FIN" || comprobacion === "Fin" ) {break;
//     } else{
//         nombreP = comprobacion;
//         let precioP = prompt('Ingrese el precio del producto');
//         let detalleP = prompt('Ingrese el detalle del producto');
//         let cantidadP = prompt('Ingrese la cantidad comprada del producto');
//         arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
//     };
//     }

//     while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

//     console.log(arrayProductos);

// // POCO STOCK - MENOS DE 3 PRODUCTOS
// let pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
// console.log('Productos con Poco stock, comprar nuevamente: ');
// console.log(pocoStock);




// const cantProductos = Number(prompt("Ingrese la cantidad de productos (Auriculares, teclados, mouses, mousepads)"));

// let listaProductos = [];
// for (let i = 0; i < cantProductos; i++) {
// const tarea = prompt(`Ingrese el producto ${i + 1}`);

// listaProductos.push(tarea);
// }

// console.table(listaProductos);

class Persona {
	constructor(nombreParam, apellidoParam, edadParam, ciudadParam) {
		this.nombre = nombreParam;
		this.apellido = apellidoParam;
		this.edad = edadParam;
		this.ubicacion = {
			ciudad: ciudadParam
		}
		this.puntos = undefined;
		this.activo = true;
	}
	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
	}
}


let personas = [];

const cantPersonas = Number(prompt("Ingrese la cantidad de personas"));

for (let i = 0; i < cantPersonas; i++) {
	const nombre = prompt(`Ingresa el nombre de la persona ${i + 1}`);
	const apellido = prompt(`Ingresa el apellido de la persona ${i + 1}`);
	const edad = prompt(`Ingresa el edad de la persona ${i + 1}`);
	const ciudad = prompt(`Ingresa el ciudad de la persona ${i + 1}`);

	const persona = new Persona(nombre, apellido, edad, ciudad);
	personas.push(persona);
}

personas.push(new Persona("Juan", "Perez", 23, "Gral Roca"));
personas.push(new Persona("Luis", "Grande", 54, "Allen"));
personas.push(new Persona("Carlos", "Tevez", 14, "Neuquen"));
personas.push(new Persona("Enzo", "Perez", 87, "Cordoba"));
personas.push(new Persona("Leonel", "Messi", 32, "Buenos Aires"));

console.log(personas);

for (const persona of personas) {
	if (persona.nombre === "Enzo") {
		console.log("Existe un Enzo")
	}
}

