class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  calcAge() {
    console.log(2024 - this.birthYear)
  }

  greet() {
    console.log(`Hey ${this.fullName}`)
  }

  get age() {
    return 2024 - this.birthYear
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name // convention olarak _ kullanılır. set fonksiyonu içinde kullanılan değişkenlerin isimleri ile constructor içinde kullanılan değişkenlerin isimleri aynı olmamalıdır.
    } else {
      alert(`${name} tam bir isim değil`)
    }
  }

  get fullName() {
    return this._fullName
  }

  static hey() {
    console.log("Hey there")
  }
}
const berkcan = new PersonCl("Berkcan Gümüşışık", 1999)
console.log(berkcan)
berkcan.calcAge()
berkcan.greet()
console.log(berkcan.age)
PersonCl.hey()
/**
 * class tanımlarken class ClassName{} şeklinde tanımlanır.
 * Sınıflar kaldırılamaz.
 * Sınıflar fonksiyonlara aktarılabilir ve fonksiyonlar gibi çağırılabilir.
 * Sınıflar katı modda çalışır. Yani strict mode aktif olarak çalışır.Yani this anahtar kelimesi undefined olmaz.
 * get : değer okumak için kullanılır.
 * set : değer atamak için kullanılır.
 * static : sınıfın kendisine ait bir fonksiyon oluşturmak için kullanılır. Sınıfın prototype'ına eklenmez.
 * Object.create() : Bir objenin prototype'ını başka bir objeden oluşturmak için kullanılır. Bu sayede bir objenin prototype'ını başka bir objeden oluşturabiliriz.
 * init() : Bu fonksiyon constructor fonksiyonunun içinde tanımlanır ve constructor fonksiyonunun içinde çağırılır. Bu fonksiyon constructor fonksiyonunun içindeki işlemleri yapar. Bu sayede constructor fonksiyonu içindeki işlemler daha düzenli bir şekilde yapılır.
 */

const account = {
  owner: "Berkcan",
  movements: [200, 300, 400, 500],

  get latest() {
    return this.movements.slice(-1).pop()
  },
  set latest(mov) {
    this.movements.push(mov)
  },
}

console.log(account.latest)
account.latest = 50
console.log(account.movements)


const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = "Steven"
steven.birthYear = 2002
steven.calcAge()
console.log(steven.__proto__ === PersonProto) // true
console.log(steven.__proto__.__proto__) // Object.prototype

const sarah = Object.create(PersonProto)
sarah.init("Sarah", 1997)
sarah.calcAge()


class CarCl{
    constructor(make, speed){
        this.make = make
        this.speed = speed
    }

    accelerate(){
        this.speed += 10
        console.log(`${this.make} : ${this.speed} km\sa`)
    }

    brake(){
        this.speed -= 5
        console.log(`${this.make} : ${this.speed} km\sa`)
    }

    get speedUS(){
        return this.speed / 1.6
    }

    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

const ford = new CarCl("Ford", 120)
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50
console.log(ford)