function comparacion(){
    // Solicitar al usuario que introduzca dos números
    let numero1 = prompt("Introduce el primer numero:");
    let numero2 = prompt("Introduce el segundo numero:");

    // Convertir los valores de texto a números enteros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // Comparar los números y mostrar el resultado en la consola
    if (numero1 === numero2) {
        console.log("Los dos números son iguales.");
    } else if (numero1 > numero2) {
        console.log(`El número mayor es ${numero1} y el menor es ${numero2}.`);
    } else {
        console.log(`El número mayor es ${numero2} y el menor es ${numero1}.`);
    }
}
  
function logica(){
    // Definir dos variables con valores lógicos
    let var1 = true;
    let var2 = false;
  
    // AND lógico - Devuelve true solo si ambos operandos son true
    console.log(var1 && var2); // false
  
    // OR lógico - Devuelve true si al menos uno de los operandos es true
    console.log(var1 || var2); // true
  
    // NOT lógico - Cambia el valor booleano a su opuesto
    console.log(!var1); // false
    console.log(!var2); // true
  
}

function variable(){
    let myString = "Hello, world!";
    console.log(typeof myString);  // Outputs: string
  
    let myNumber = 123;
    console.log(typeof myNumber);  // Outputs: number
  
    let myBool = true;
    console.log(typeof myBoolean);  // Outputs: boolean
  
    let myNull = null;
    console.log(typeof myNull);  // Outputs: object (this is a known JavaScript quirk)
  
    let myUndefined;
    console.log(typeof myUndefined);  // Outputs: undefined
}
  
function tipoDato() {
    // Pide input al usuario
    let userInput = prompt("Inserta un dato:");
    // funcion para determinar tipo de string
    function determineType(value) {
        // checar si es un null
        if (value.trim() === "") {
            return "Null (empty or whitespace-only input)";
        }
        // convertir el string a numero si es posible
        if (!isNaN(value) && value.trim() !== "") {
            return "Number";
        }
        // checar si es booleano
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
            return "Boolean";
        }
        // Default to string if no other type matches
        return "String";
    }
    // Output el tipo de dato
    console.log("El tipo de dato es: ", determineType(userInput));
}

function suma(x, y, z) {
    // Sumar los tres argumentos
    let resultado = x + y + z;
    // Mostrar el resultado en la consola
    console.log("La suma de los números es:", resultado);
}

function mult(x, y) {
    // Sumar los tres argumentos
    let resultado = x * y;
    // Mostrar el resultado en la consola
    console.log("La multiplicacion de los números es:", resultado);
}

function esString(x, y, z) {
    // Comprobar si todos los argumentos son de tipo string
    let sonStrings = typeof x === 'string' && typeof y === 'string' && typeof z === 'string';
    // Mostrar el resultado en la consola
    console.log(sonStrings);
}

function verificaVocales(x) {
    /*
    // Convertir la entrada a minúsculas para facilitar la comparación
    x = x.toLowerCase();
    // Crear un conjunto con las vocales
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);
    // Verificar si el argumento es una vocal
    let esVocal = vocales.has(x);
    // Mostrar el resultado en la consola
    console.log(esVocal);
    */
   const esVocal = /^[aeiou]$/i.test(x);
    if(esVocal){
        console.log("Es una vocal");
    } else {
        console.log("No es una vocal");
    }
}

function validarEdad(edad){
    if (edad >= 18){
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}

// Función para añadir un nombre nuevo al arreglo
function aniadirNombre() {
    let nuevoNombre = prompt("Introduce un nombre:");

    let nombres = ["Ana", "Pedro", "Maria", "Juan"];
    console.log("Nombres actuales:", nombres);
    nombres.push(nuevoNombre);
    console.log("Nombre añadido:", nuevoNombre);
    console.log("Arreglo actualizado:", nombres);
}

function eliminarNombre() {
    let nombres = ["Ana", "Pedro", "Maria", "Juan"];
    console.log("Nombres actuales:", nombres);
    let nombreAEliminar = prompt("Introduce el nombre que deseas eliminar:");
    let indice = nombres.indexOf(nombreAEliminar);
    if (indice !== -1) {
        nombres.splice(indice, 1);
        console.log("Nombre eliminado:", nombreAEliminar);
    } else {
        console.log("Nombre no encontrado:", nombreAEliminar);
    }
    console.log("Arreglo actualizado:", nombres);
}

function buscarNombre() {
    let nombres = ["Ana", "Pedro", "Maria", "Juan"];
    console.log("Nombres actuales:", nombres);
    let nombreABuscar = prompt("Introduce el nombre que deseas buscar:");
    let indice = nombres.indexOf(nombreABuscar);
    if (indice !== -1) {
        console.log("Nombre buscado:", nombreABuscar, "Ubicación:", indice);
    } else {
        console.log("Nombre buscado:", nombreABuscar, "No encontrado en el arreglo.");
    }
}

function map(){
    const numeros = [4, 9, 16, 25];
    console.log("Números originales:", numeros);
    const raices = numeros.map(Math.sqrt);
    console.log("Raices: ",raices);
}

function forLoop(){
    console.log("Usando for:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function whileLoop(){
    console.log("Usando while:");
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

function doWhileLoop(){
    console.log("Usando do-while:");
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 10);
}

// objetos
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,

    // Método para cambiar la marca del coche
    cambiarMarca: function(nuevaMarca) {
        this.marca = nuevaMarca;
        console.log("La marca ha sido actualizada a:", this.marca);
    },

    // Método para cambiar el modelo del coche
    cambiarModelo: function(nuevoModelo) {
        this.modelo = nuevoModelo;
        console.log("El modelo ha sido actualizado a:", this.modelo);
    },

    // Método para cambiar el año del coche
    cambiarAño: function(nuevoAño) {
        this.año = nuevoAño;
        console.log("El año ha sido actualizado a:", this.año);
    },

    // Método para mostrar información detallada del coche
    mostrarInformacion: function() {
        let info = `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
        console.log("Información del Coche:", info);
    }
};

function cambiarMarca() {
    let nuevaMarca = document.getElementById('marcaInput').value;
    coche.marca = nuevaMarca;
    console.log("La marca ha sido actualizada a:", coche.marca);
}

function cambiarModelo() {
    let nuevoModelo = document.getElementById('modeloInput').value;
    coche.modelo = nuevoModelo;
    console.log("El modelo ha sido actualizado a:", coche.modelo);
}

function cambiarAño() {
    let nuevoAño = parseInt(document.getElementById('añoInput').value);
    coche.año = nuevoAño;
    console.log("El año ha sido actualizado a:", coche.año);
}

function mostrarInformacionCoche() {
    coche.mostrarInformacion();
}


