//¿Qué es un objeto en JavaScript?
const user = {
    name: "manuel",
    email: "jeswus1938@.com",
    age: 19,
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
}
interface address {
    city: string;
    cp: number;
}
