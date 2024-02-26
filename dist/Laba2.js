//First task
function max(array) {
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximum)
            maximum = array[i];
    }
    return maximum;
}
console.log(max([25, 0.21, 12. - 5, 24]));
//Second task
function haveNegative(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++)
            if (array[i][j] < 0)
                return true;
    }
    return false;
}
console.log(haveNegative([[1, 14, 12, 0, 2], [0, 0, 0, 0], [0, -3, 5]]));
//Third task
let tuple;
function sumTuple(tuple) {
    return tuple[0] + tuple[1] + tuple[2];
}
console.log(sumTuple([1, 20, 4]));
//Fourth task
var sportBalls;
(function (sportBalls) {
    sportBalls["Football"] = "Football";
    sportBalls["Basketball"] = "Basketball";
    sportBalls["Golf"] = "Golf";
    sportBalls["Tennis"] = "Tennis";
    sportBalls["Volleyball"] = "Volleyball";
})(sportBalls || (sportBalls = {}));
console.log(sportBalls.Volleyball);
//Fifth task
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function infoAboutPet(pet) {
    console.log(JSON.parse(JSON.stringify(pet)));
}
let Bobyk = new Dog();
infoAboutPet(Bobyk);
//Sixth task
class SportBall {   
}
let ya_futbolnyj_myachik = {
    type: sportBalls.Football,
    size: 12,
    color: "Green"
};
console.log(JSON.parse(JSON.stringify(ya_futbolnyj_myachik)));
