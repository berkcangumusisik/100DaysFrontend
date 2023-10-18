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


// instance of => Bir objenin bir constructor fonksiyonundan oluşturulup oluşturulmadığını kontrol eder.

console.log(berkcan instanceof Person)

// Prototypes
// Her fonksiyonun bir prototype özelliği vardır. Bu özellik sayesinde fonksiyonlardan oluşturulan objelere yeni özellikler ekleyebiliriz.
console.log(Person.prototype)
Person.prototype.calcAge = function(){
    console.log(2023 - this.birthYear)
}

berkcan.calcAge()
console.log(berkcan.__proto__) 
console.log(berkcan.__proto__ === Person.prototype) // true
console.log(Person.prototype.isPrototypeOf(berkcan)) // true 
//isPrototypeOf => Bir objenin bir constructor fonksiyonundan oluşturulup oluşturulmadığını kontrol eder.

//.hasOwnProperty => Bir objenin kendi prototype'ında olup olmadığını kontrol eder.

Person.prototype.species = "Homo Sapiens"
console.log(berkcan.species, matilda.species)

console.log(berkcan.hasOwnProperty("firstName"))
console.log(matilda.hasOwnProperty("species"))


console.log(berkcan.__proto__)
console.log(berkcan.__proto__.__proto__)

