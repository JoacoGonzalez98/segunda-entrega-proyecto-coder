// String => "", '', ``

// console.log("Tabla del 8");
// for (let i = 1; i <= 10; i++) {

    // console.log(`8x${i} = ${8 * i}`)
//     }   

/* FOR */

// Se le pide al usuario las tareas que va a realizar
const cantTareas = Number(prompt("Ingresa la cantidad de tareas vas a realizar hoy"));

let listaTareas = "";
for (let i = 1; i <= cantTareas; i++) {
	// console.log(`Ejecución n° ${i}`);
	const tarea = prompt(`Ingresá la tarea nro ${i}`);
	// 					 "Ingresa la tarea nro " + i;

	console.log(`Tarea nro ${i}: ${tarea}`);
	if (i == cantTareas) {
		listaTareas = listaTareas + `${i}: ${tarea}`;
		break;
	}

	// i+=2 <=> i = i + 2;
	// listaTareas += `Tarea nro ${i}: ${tarea}` + "\n";
	listaTareas = listaTareas + `${i}: ${tarea}` + "\n";
	// i=1 =>"Tarea nro 1: xxxxxxx \n" =     ""	+ "Tarea nro 1: xxxxxxx" + "\n"
	// i=2 => "Tarea nro 1: xxxxxxx \n" + "Tarea nro 2: xxxxxxx" + "\n" = "Tarea nro 1: xxxxxxx \n" + "Tarea nro 2: xxxxxxx" + "\n"
}

alert(`Tu lista de tareas es la siguiente:
${listaTareas}`)

let tareasPendientes = cantTareas;
let opcion;
do {
	/// if (opcion == undefined)
	if (!opcion) {
		opcion = Number(prompt(`Elegí una opción:
		1 - Ingresar cantidad de tareas completadas
		2 - Ingresar número de tarea completada`));
	}

	switch (opcion) {
		case 1:
			const cantTareasCompletadas = Number(prompt("Ingresa la cantidad de tareas completadas"));

			if (cantTareasCompletadas > tareasPendientes) {
				alert("No podés completar más tareas de las que tenés pendientes");
				continue;
			} else if (isNaN(cantTareasCompletadas)) {
				alert("Tenés que ingresar un número maestro");
				continue;
			}
			tareasPendientes = tareasPendientes - cantTareasCompletadas;
			if (tareasPendientes > 0) {
				alert(`Ok, te quedan ${tareasPendientes} tareas pendientes`);
			}
			break;
		case 2:
			const tareaCompletada = Number(prompt("Ingresa el nro de tarea que completaste"));
			if (tareaCompletada > cantTareas) {
				alert("Esa tarea no existe");
				continue;
			}
			// tareasPendientes = tareasPendientes - 1;
			tareasPendientes--;
			if (tareasPendientes > 0) {
				alert(`Ok, te quedan ${tareasPendientes} tareas pendientes`);
			}
			break;
		default:
			alert("La opción ingresada no existe");
			opcion = undefined;
			break;
	}

} while (tareasPendientes > 0)

alert("¡Ya no te quedan tareas pendientes!");
// console.log("Despues del FOR");




