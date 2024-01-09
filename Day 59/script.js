class PersonCl{
  constructor(fullName, birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
  }

  calcAge(){
    return 2037 - (this.birthYear)
  }

  greet(){
    console.log(`Hey ${this.fullName}`)

  }

  getAge(){
    return 2037 - this.birthYear
  }

  set fullName(name){
    if(name.includes("")) this._fullName = name
    else alert($`${name} isim soyisim içermiyor.` )
  }

  get fullName(){
    return this._fullName
  }

}



class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
    super(fullName, birthYear)
    this.course = course
  }

  introduce(){
    super.greet()
    console.log(`Merhaba ${this.fullName} yaşınız ${this.getAge()} yaşında ${this.course} kursuna katılıyor.`)
  }

  calcAge(){
    return super.getAge()
  }

}

const berkcan = new StudentCl("Berkcan Gümüşışık", 1999, "Bilgisayar Bilimleri")

berkcan.introduce()
berkcan.calcAge()

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear)
  },

  init(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  },
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(StudentProto)
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course

}

StudentProto.introduce = function(){
  console.log(`Merhaba ${this.firstName} yaşınız ${this.calcAge()} yaşında ${this.course} kursuna katılıyor.`)
}

const jay = Object.create(StudentProto)
jay.init("Jay", 2010, "JS")

jay.introduce()
jay.calcAge()

class Account {
  constructor(owner, currency, pin){
    this.owner = owner
    this.currency = currency
    this.pin = pin
    this.movemets = []
    this.locale = navigator.language

    console.log(`${owner} ${currency}`)
  }

  deposit(amount){
    this.movemets.push(amount)
  }
  withdraw(amount){
    this.movemets.push(-amount)
  }
}

const acc1 = new Account("Berkcan","EUR",1111)
console.log(acc1)
acc1.movement()
acc1.movement()