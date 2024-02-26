declare function max(array: number[]): number;
declare function haveNegative(array: number[][]): boolean;
declare let tuple: [number, number, number];
declare function sumTuple(tuple: [number, number, number]): number;
declare enum sportBalls {
    Football = "Football",
    Basketball = "Basketball",
    Golf = "Golf",
    Tennis = "Tennis",
    Volleyball = "Volleyball"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function infoAboutPet<T extends Pet>(pet: T): void;
declare let Bobyk: Dog;
declare class SportBall {
    type: sportBalls;
    size: number;
    color: string;
}
declare let ya_futbolnyj_myachik: SportBall;
