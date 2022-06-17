class TipoDeReparacion {
	constructor (portada, lomo, limpieza, pegado){
		this.portada = portada;
		this.lomo = lomo;
		this.limpieza = limpieza;
		this.pegado = pegado;
	}
}

const rustica = new TipoDeReparacion (
	{nombre: "Restauración de portada $" , precio: 600},
	{nombre: "Encolado de lomo $" , precio: 1200},
	{nombre: "Limpieza $" , precio: 300},
	{nombre: "Pegado de páginas $" , precio: 2000})

const cartone = new TipoDeReparacion (
	{nombre: "Restauración de portada $" , precio: 2000},
	{nombre: "Encolado de lomo $" , precio: 5000},
	{nombre: "Limpieza $" , precio: 1500},
	{nombre: "Pegado de páginas $" , precio: 7000})

const cuero = new TipoDeReparacion (
	{nombre: "Restauración de portada $" , precio: 15000},
	{nombre: "Reemplazo de tarlatana $" , precio: 10000},
	{nombre: "Limpieza $" , precio: 8000},
	{nombre: "Restauración de páginas $" , precio: 9000})

let carrito = []
let precioFinal = 0

function opciones (eleccion){
	let producto = prompt("¿Qué desea agregar a su pedido?" + "\n1: " +
	eleccion.portada.nombre + eleccion.portada.precio + "\n2: " +
	eleccion.lomo.nombre + eleccion.lomo.precio + "\n3: " +
	eleccion.limpieza.nombre + eleccion.limpieza.precio + "\n4: " +
	eleccion.pegado.nombre + eleccion.pegado.precio +
	"\nESC: Cancelar y regresar.");
	function sumatoria (eleccion) {
		carrito.push(eleccion.nombre + eleccion.precio + "\n")
		precioFinal += eleccion.precio
	}
	switch (producto) {
				case "1":
					sumatoria(eleccion.portada)
					break;
				case "2":
					sumatoria(eleccion.lomo)
					break;
				case "3":
					sumatoria(eleccion.limpieza)
					break;
				case "4":
					sumatoria(eleccion.pegado)
					break;
			}
}

const texto = "\n1: Ver opciones en rústica\n2: Ver opciones en cartoné\n3: Ver opciones de cosido en cuero\nESC: Terminar y ver su carrito"
let bienvenida = prompt("Bienvenido al carrito de compras. ¿Qué desea agregar a su pedido?" + texto)
bienvenida = bienvenida.toLowerCase();
while (bienvenida != "esc"){
	switch (bienvenida) {
		case "1":
			opciones(rustica)
	 		break;
	 	case "2":
	 		opciones(cartone)
	 		break;
	 	case "3":
	 		opciones(cuero)
	 		break;
	 	default:
	 		alert("Error. Elija una de las opciones disponibles");
	 		break;	
	}
	bienvenida = prompt("¿Desea algo más?" + texto)
	bienvenida = bienvenida.toLowerCase();
}

carrito = carrito.sort((a, b) => (Number(a.match(/(\d+)/g)) - Number((b.match(/(\d+)/g)))));

if (carrito !=""){
	let ul = document.createElement("ul")
	for (let pedido of carrito){
		ul.innerHTML += `<li> ${pedido}</li>`
	}
	ul.innerHTML += `<hr><li>Precio final: $${precioFinal}</li>`
	document.body.append(ul)
}
else {
	let h3 = document.createElement("h3")
	h3.innerHTML = "Parece que su carro está vacío. Refresque la página si desea cargar alguno de nuestros productos"
	document.body.append(h3)
}