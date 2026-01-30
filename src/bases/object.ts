//¿Qué es un objeto en JavaScript?
const user = {
    name: "manuel",
    email: "jeswus1938@.com",
    age: 19,
    saludar() {
        console.log(user.name);
    },
    address: {
        city: "aguascalientes",
        cp: 201236,
    },
};


//¿Qué es una interfaz de TypeScript?
interface user {
    name: string;
    email: string;
    age: number;
    saludar(): void;
}
interface address {
    city: string;
    cp: number;
    hola: string;
}
