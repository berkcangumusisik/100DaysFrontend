const Person = function(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
    this.calcAge = function(){
        console.log(2023 - this.birthYear)
    }
}

const berkcan = new Person('Berkcan', 1999)
console.log(berkcan)
berkcan.calcAge()

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda, jack)
jack.calcAge()

console.log(berkcan instanceof Person)

console.log(Person.prototype)
Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear)
}

berkcan.calcAge()
console.log(berkcan.__proto__) 
console.log(berkcan.__proto__ === Person.prototype) // true
console.log(Person.prototype.isPrototypeOf(berkcan)) // true 

Person.prototype.species = "Homo Sapiens"
console.log(berkcan.species, matilda.species)

console.log(berkcan.hasOwnProperty("firstName"))
console.log(matilda.hasOwnProperty("species"))


console.log(berkcan.__proto__)
console.log(berkcan.__proto__.__proto__)

// Object.prototype 

console.dir(Person.prototype.constructor)   // Person constructorını verir.

const arr = [3,6,4,5,6,9]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype) // true
console.log(arr.__proto__.__proto__)

Array.prototype.unique = function() {
    return [...new Set(this)]
}

console.log(arr.unique())


const Car = function (make, speed){
    this.make = make
    this.speed = speed
}


Car.prototype.accelerate = function (){
    this.speed += 10
    console.log(`${this.make} : ${this.speed} km\sa`)
}

Car.prototype.brake = function (){
    this.speed -= 5
    console.log(`${this.make} : ${this.speed} km\sa`)
}

const bmv = new Car("BMW",120)
const mercedes = new Car("Mercedes", 95)

bmv.accelerate()
mercedes.accelerate()

//prototype: Bir constructor functionunun prototype özelliği, o constructor functionunun nesnelerinin özelliklerini ve metodlarını barındıran bir objedir. Bu sayede o constructor functiondan üretilen nesnelerin özelliklerini ve metodlarını kullanabiliriz.
// __proto__: Bir nesnenin prototype özelliğinin değerini referans eder. Yani bir nesnenin prototype özelliğinin değeri olan objeye erişmek için __proto__ özelliğini kullanabiliriz.