interface Animal {
    name: string;
    age: number;
    isAlive: boolean;
    Sound(): void;
}

const gato: Animal = {
    name: "michi",
    age: 1,
    isAlive: true,
    Sound: function (): void {
        console.log("Miau")
    }
}
const perro: Animal = {
    name: "firus",
    age: 1,
    isAlive: true,
    Sound: function (): void {
        console.log("Guau")
    }
}
gato.Sound();
perro.Sound();