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
const accounts = [account1, account2, account3]

const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')


const currencies = new Map([
    ['USD', 'Dolar'],
    ['EUR', 'Euro'],
    ['GBP', 'Sterlin'],
    ["TRY", "Türk Lirası"]
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const displayMovements = function(movements, ){
    containerMovements.innerHTML = ""
    movements.forEach(function(mov, i){
        const type = mov > 0 ? "Para Yatırma" : "Para Çekme"
        const html =`
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i+1}. ${type}</div>
            <div class="movements__date">${i+1}</div>
            <div class="movements__value">${mov} TL</div>
        </div>
        `
        containerMovements.insertAdjacentHTML("beforeend", html)
    })
}

displayMovements(account1.movements)


const user = "Berkcan Gümüşışık"

const createUserNames= function(accs){
    accs.forEach(function(acc){
        acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map(name => name[0])
        .join("")
    })
}


createUserNames(accounts)

const calcPrintBalance = function(movements){
    const balance = movements.reduce((acc, cur) => acc + cur, 0)
    labelBalance.textContent = `${balance} TL`

}
calcPrintBalance(account1.movements)

const deposits = movements.filter(function(mov){
    return mov > 0
})

console.log(movements)
console.log(deposits)

const depositsFor = []
for(const mov of movements) if(mov > 0) depositsFor.push(mov)
console.log(depositsFor)

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals)

const balance = movements.reduce(function(acc, cur, i, arr){
    return acc + cur
},0)
console.log(balance)

let balance2 = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance2)

let balance3 = 0
for(const mov of movements) balance3 += mov
console.log(balance3)


const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
    const adults = humanAges.filter(age => age >= 18)
    const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length

    

    return average
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)