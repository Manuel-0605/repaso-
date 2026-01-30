interface VideoGame {
    title: string;
    price: number;
    isAvailable: boolean;
    genre: string;
    initGame: () => void;
}

const gameOne: VideoGame = {
    title: "Dragon’s Fall",
    price: 59.99,
    isAvailable: true,
    genre: "Fantasy",
    initGame: () => { }
};

const gameTwo: VideoGame = {
    title: "god of war",
    price: 39.99,
    isAvailable: true,
    genre: "Adventure",
    initGame: () => { }
};


