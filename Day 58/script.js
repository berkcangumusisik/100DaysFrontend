const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function (){
  console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
  Person.call(this,firstName,birthYear)
  this.course = course
}
// Linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`Benim adım ${this.firstName} ve ben ${this.course} üzerine çalışıyorum. `)
}


const berkcan = new Student("Berkcan",1999,"Javascript")
console.log(berkcan)
berkcan.introduce()
berkcan.calcAge()

console.log(berkcan.__proto__)
console.log(berkcan.__proto__.__proto__)

Student.prototype.constructor = Student
console.log(Student.prototype.consructor)
/**
 * .call ile bir fonksiyonu belli bir obje için çağırmada kullanılır. this parametresi eklenir. Bu sayede DRY prensibine uyulur.
 * 
 */

// Kodlama Egzersizi

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} : ${this.speed} km\sa`)
}

Car.prototype.brake = function(){
  this.speed -= 5
  console.log(`${this.make} : ${this.speed} km\sa`)
}

const EV = function(make, speed, charge){
  Car.call(this, make, speed)
  this.charge = charge 
  
} 

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo

}

EV.prototype.accelerate = function(){
  this.speed += 20
  this.charge--
  console.log(`${this.make} : ${this.speed} km\sa, Şarj: ${this.charge}`)
}
const tesla = new EV("Tesla",120,23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.brake()
tesla.accelerate()