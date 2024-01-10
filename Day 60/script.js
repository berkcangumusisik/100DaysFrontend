class Account {
  // Public field
  locale = navigator.language
  _movemets = []

  // Private field : #
  #movemets = []
  #pin 

  constructor(owner, currency, pin){
    this.owner = owner
    this.currency = currency
    this.#pin = pin
    //this._movemets = []
    this.locale = navigator.language

    console.log(`${owner} ${currency}`)
  }

  getMovements(){
    return this.#movemets
  }
  deposit(amount){
    this.#movemets.push(amount)
  }
  withdraw(amount){
    this.deposit(-amount)
  }

  approveLoan(amount){
    return true
  }

  requestLoan(amount){
    if (this.approveLoan(amount)) {
      this.deposit(amount)
      console.log("Kredi onaylandı")
    }
  }

  //Private Methods
  #approveLoan(amount){
    return true
  }

  static helper(){
    console.log("Helper")
  }
}

const acc1 = new Account("Berkcan","EUR",1111)
acc1._movemets.push(250)
acc1._movemets.push(-140)
acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(250)
acc1.approveLoan(250)
console.log(acc1.getMovements())
console.log(acc1)
console.log(acc1.pin)


// Private : # alternatif ise _

Account.helper()
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} : ${this.speed} km/sa`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} : ${this.speed} km/sa`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);