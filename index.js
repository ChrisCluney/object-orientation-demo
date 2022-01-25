let person = {
    firstName: `Chris`,
    lastName: `Cluney`,
    age: 36

}

// console.log(person.firstName)
// console.log(person['lastName'])


let meal = {
    appetizer: 'Nachos',
    entree: 'Burrito',
    dessert: 'churros',
    drink: 'Margarita'
}

const {dessert} = meal

const {appetizer, entree} = meal

const {drink: chrisDrink} = meal

// const myAppetizer = meal.appetizer
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(myAppetizer, myEntree, myDessert, myDrink)


//-----------------------------------------
// for(let attribute in person){
//     console.log(attribute)
// }

// for(let key in person){
//     console.log(key)
//     console.log(person[key])
// }
//-----------------------------------------

person.job = "Insect labeling"
person['pets'] = ['duck', 'shetland']
// person.pets.splice(0, 1)
delete person.pets 

// console.log(person)

//----------------------------------------------Classes-------------------------------------------

class Dog {
    constructor(dogName, dogBreed, dogAge){
        // "this" represents the object that will be created by the Dog class
        // this = {}
        this.name = dogName
        this.breed = dogBreed
        this.age = dogAge
        this.lovesBones = true //Will be hard coded to every dog if not defined in the constructor
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}. `)
    }
}

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, dogTrainingLevel){
        super(dogName, dogBreed, dogAge)

        this.dogTrainingLevel = dogTrainingLevel
    }

    levelUp(num){
        this.dogTrainingLevel += num
    }

    greeting(){
        super.greeting()
        console.log(`I'm a puppy!`)
    }
}

let lassie = new Dog('Lassie', 'collie', 18)
let beethoven = new Dog('Beethoven', 'St. Bernard', 12)
let chief = new Puppy('Chief', 'Lab', 1, 0)

// let dogsArr = [lassie, beethoven]

// console.log(dogsArr)
// console.log(lassie)
// console.log(beethoven)

// lassie.greeting()

// beethoven.greeting()

// for(let key in lassie){
//     console.log(lassie[key])
// }
chief.levelUp(5)
console.log(chief)
chief.greeting()