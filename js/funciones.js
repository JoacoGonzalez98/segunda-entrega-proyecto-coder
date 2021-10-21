// Funciones
//Definicion de la función
// const saludo = () => {
//     let nombre = prompt(`Bienvenido a la tienda de HyperX Argentina!

// Ingrese su nombre:`);
// let edad = Number(prompt("edad"));
// while (edad < 18) {
// alert("no entra");
// edad = Number(prompt("edad"));
// }}
// // Ejecutar la funcion (llamada/invocación)
// saludo();


// Funcion que le pide el nombre al usuario
function inputName() {
    let name = prompt(`Bienvenido a la tienda de HyperX Argentina!
    Ingresá tu nombre:`);
    return name;
}
// Funcion que le pide la edad al usuario
function inputAge() {
    let age = Number(prompt("Ingresá tu edad:"));
    while (age < 18) {
        alert("Vuelve cuando seas mayor de edad");
        age = Number(prompt("Ingresá tu edad nuevamente:"));
    }
    return age;
}
// Funcion que le pide el mail al usuario
function inputEmail() {
    let email = prompt(`Ingresa tu email:`);
    // alert(`Email es ${email}`);
    return email;
}

function saludo(nombre, edad, email) {
    alert(
        `Tus datos son los siguientes:
        Nombre: ${nombre}
        Edad: ${edad}
        Email: ${email}`
    );
}
// ejecuta Saludo pasando las otras funciones ejecutadas como parámetros. Estas devuelven lo que esté indicado en su "return"
saludo(inputName(), inputAge(), inputEmail());
