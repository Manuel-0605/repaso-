let students: string[] = [];
console.log(students);

students.push("Manuel");
console.log(students);

students.push("jesús");
console.log(students);

let last = students.pop();
console.log(students, last);

let grades: boolean[] = [false, false];
let gradesTwo: number[] = [1, 2, 3, 4];

let newArray: (string | number | boolean)[] = ["Carlos", 10, true];

interface Books {
    name: string;
    price: number;
    isActive: boolean;
    printNameOnTheBook: () => void;
    msg?: string;
}

const theHungerGames: Books = {
    name: "Los Juegos del Hambre",
    price: 500,
    isActive: true,
    printNameOnTheBook: () => {
        console.log("Sot el libro de los juegos del hambre");
    },
};

theHungerGames.name;

const { name, isActive, price } = theHungerGames;
console.log(name, isActive, price);

function suma(param: Books): void {
    console.log(param.name, param.price);
}

let result = suma(theHungerGames);
console.log(result);