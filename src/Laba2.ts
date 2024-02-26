//First task
function max (array:number[]) {
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximum) maximum = array[i];
    }
    return maximum;
}
console.log(max([25, 0.21, 12. -5, 24]))

//Second task
function haveNegative(array:number[][]):boolean {
    for(let i = 0; i<array.length; i++){
        for(let j:number=0; j<array[i].length; j++)
            if(array[i][j]<0) return true;
    }
    return false;
}
console.log(haveNegative([[1, 14, 12, 0, 2], [0, 0, 0, 0], [0, -3, 5]]))

//Third task
let tuple:[number, number, number];
function sumTuple(tuple:[number, number, number]):number{
    return tuple[0] + tuple[1] + tuple[2];
}
console.log(sumTuple([1, 20, 4]));

//Fourth task
enum sportBalls {Football = "Football", Basketball = "Basketball", Golf = "Golf", Tennis = "Tennis", Volleyball = "Volleyball"}
console.log(sportBalls.Volleyball);

//Fifth task
class Pet {
    name: string = 'Some pet'
    age: number = -1

    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}
function infoAboutPet<T extends Pet>(pet:T):void{
    console.log(JSON.parse(JSON.stringify(pet)));
}
let Bobyk = new Dog();
infoAboutPet(Bobyk);

//Sixth task
class SportBall{
    type:sportBalls;
    size:number;
    color:string;
}
let ya_futbolnyj_myachik:SportBall = {
    type: sportBalls.Football,
    size: 12,
    color: "Green"
}
console.log(JSON.parse(JSON.stringify(ya_futbolnyj_myachik)));