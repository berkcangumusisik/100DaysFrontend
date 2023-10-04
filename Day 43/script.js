const account1 = {
    owner: "Berkcan Gümüşışık",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
}

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
}

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
}

const accounts = [account1, account2, account3];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const currencies = new Map([
    ['USD', 'Dolar'],
    ['EUR', 'Euro'],
    ['GBP', 'Sterlin'],
    ["TRY", "Türk Lirası"]
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * .slice() ile diziyi alt dizilere ayırabiliriz. 
 * .splice() ile dizinin içinden eleman çıkarabiliriz.
 * .reverse() ile diziyi ters çevirebiliriz.
 * .concat() ile dizileri birleştirebiliriz.
 * .join() ile diziyi stringe çevirebiliriz.
 */
let arr = ["a", "b", "c", "d", "e"]
arr.slice(2) // c,d,e
console.log(arr.slice(2))
console.log(arr.slice(2, 4)) // c,d
console.log(arr.slice(-2)) // d,e
console.log(arr.slice(-1)) // e

// Splice
console.log(arr.splice(2)) // c,d,e
console.log(arr) // a,b

// reverse
arr = ["a", "b", "c", "d", "e"]
const arr2 = ["j", "i", "h", "g", "f"]
console.log(arr2.reverse()) // f,g,h,i,j

// concat
const letters = arr.concat(arr2)
console.log(letters) // a,b,c,d,e,f,g,h,i,j
console.log([...arr, ...arr2]) // a,b,c,d,e,f,g,h,i,j

// join
console.log(letters.join(" - ")) // a - b - c - d - e - f - g - h - i - j

const arr3 = [23, 11, 64]
console.log(arr3[0]) // 23
console.log(arr3.at(0)) // 23

// .at() ile dizinin içindeki elemanlara erişebiliriz.

for(const [i , movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`İşlem ${i + 1}: ${movement} yatırdınız.`)
    }
    else {
        console.log(`İşlem ${i + 1}: ${Math.abs(movement)} çektiniz.`)
    }
}

console.log("------ FOREACH ------")
movements.forEach(function (mov , i, arr) {
    if (movement > 0) {
        console.log(`İşlem ${i + 1}: ${movement} yatırdınız.`)
    }
    else {
        console.log(`İşlem ${i + 1}: ${Math.abs(movement)} çektiniz.`)
    }
})