function suma(a: number, b: number) {
    return a + b;
}

console.log(suma(10, 2));


function printMesage(msg: string) {
    console.log(msg);
}

printMesage("Hola mundo");

function saludar(nombre: string) {
    return `Hola ${nombre}`
}
const saludo = saludar("jesus");
console.log(saludo);