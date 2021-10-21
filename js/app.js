// Selectores
const listaProductos = document.querySelector("#lista-productos");
const arrayNombres = [
auriculares,
microfonos,
teclados,
mouses,
mousepads,
];
document.addEventListener("DOMContentLoaded", () => {
arrayNombres.forEach((producto) => {
    renderProducts(producto);
});
});

function renderProducts(producto) {
	producto.forEach((elemento) => {
	const card = document.createElement("div");
	const cardContent = `
				<img src="${elemento.imagen}" class="imagen-${elemento} imagen-prod" id="${elemento}">
				<div class="info-card">
				<h4>${elemento.nombre}</h4>
				<p>HyperX</p>
				<p class="precio"><span class="u-pull-right">${elemento.precio}</span></p>
				<a href="#" id="button-event" class="u-full-width button-primary button input agregar-carrito" data-id="${elemento.id}">Agregar al Carrito</a>
				</div>`;
	card.classList.add("card");
	card.classList.add("container");
	card.innerHTML = cardContent;
	listaProductos.appendChild(card);
	});
}


listaProductos.addEventListener('click', agregarProducto);

function agregarProducto(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const productCard = e.target.parentElement;
		
		const productoAgregado = {
			nombre: productCard.querySelector('h4').textContent,
			precio: productCard.querySelector('.precio span').textContent,
			cantidad: 1,
			id: productCard.querySelector('a').dataset.id
		}
		carrito.push(productoAgregado);
		actualizarCarritoHTML();
	}
}

function actualizarCarritoHTML() {
	carrito.forEach(producto => {
		const { imagen, nombre, precio, cantidad, id } = producto;
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width="100%">
			</td>
			<td>
				${nombre}
			</td>
			<td>
				${precio}
			</td>
			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"><i class="fas fa-trash-alt"></i></a>
			</td>
		`
		tableCarrito.appendChild(row);
	});
}


// // Selectores
// const listaProductos = document.querySelector('#lista-auriculares');

// document.addEventListener('DOMContentLoaded', () => {
//     renderProducts(auriculares)
// }
// )
// function renderProducts(auriculares) {
//     auriculares.forEach( auriculares => {
//         const card = document.createElement("div");
// 		const cardContent = `
// 				<img src="${auriculares.imagen}" class="imagen-auriculares" id="auris">

// 				<div class="info-card">
// 					<h4>${auriculares.nombre}</h4>
// 					<p>HyperX</p>
// 					<p class="precio"><span class="u-pull-right">${auriculares.precio}</span></p>
// 					<a href="#" id="button-event" class="u-full-width button-primary button input agregar-carrito" data-id="${auriculares.id}">Agregar al Carrito</a>
// 				</div>
//         `
// 		card.classList.add("card container");
// 		card.innerHTML = cardContent
//         listaProductos.appendChild(card);
//     });
// }



// renderProducts(auriculares);