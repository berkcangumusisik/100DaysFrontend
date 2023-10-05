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
currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'TRY', 'TRY'])

currenciesUnique.forEach(function(value, key, map){
    console.log(`${key}: ${value}`)
})

console.log(containerMovements.innerHTML)

const checkdogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice()
    dogsJuliaCorrected.splice(0,1)
    dogsJuliaCorrected.splice(-2)
    const dogs = dogsJuliaCorrected.concat(dogsKate)
    dogs.forEach(function(dog, i){
        const type = dog >= 3 ? "Yetişkin" : "Yavru"
        console.log(`${i+1} numaralı köpek bir ${type} ve ${dog} yaşındadır.`)
    })
}

checkdogs([3,5,2,12,7], [4,1,15,8,3])


/**
 * map() : arrayin her bir elemanı için callback fonksiyonu çalıştırır ve yeni bir array döndürür.
 * filter() : arrayin her bir elemanı için callback fonksiyonu çalıştırır ve true dönen elemanları yeni bir arraye atar.
 * reduce() : arrayin her bir elemanı için callback fonksiyonu çalıştırır ve tek bir değer döndürür.
 */


const eurToUsd = 1.1
const movementsUSD = movements.map(mov => mov * eurToUsd)

console.log(movements)
console.log(movementsUSD)

const movementsUSDfor = []
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd)
console.log(movementsUSDfor)

const movementsDescriptions = movements.map((mov, i) => ` ${i+1}. İşlem :${Math.abs(mov)} ${mov > 0 ? "TL Para yatırdınız" : "TL Para çektiniz"} `)
console.log(movementsDescriptions)