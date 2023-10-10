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

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome")
const labelDate = document.querySelector(".date")
const labelBalance = document.querySelector(".balance__value")
const labelSumIn = document.querySelector(".summary__value--in")
const labelSumOut = document.querySelector(".summary__value--out")
const labelSumInterest = document.querySelector(".summary__value--interest")
const labelTimer = document.querySelector(".timer")

const containerApp = document.querySelector(".app")
const containerMovements = document.querySelector(".movements")

const btnLogin = document.querySelector(".login__btn")
const btnTransfer = document.querySelector(".form__btn--transfer")
const btnLoan = document.querySelector(".form__btn--loan")
const btnClose = document.querySelector(".form__btn--close")
const btnSort = document.querySelector(".btn--sort")

const inputLoginUsername = document.querySelector(".login__input--user")
const inputLoginPin = document.querySelector(".login__input--pin")
const inputTransferTo = document.querySelector(".form__input--to")
const inputTransferAmount = document.querySelector(".form__input--amount")
const inputLoanAmount = document.querySelector(".form__input--loan-amount")
const inputCloseUsername = document.querySelector(".form__input--user")
const inputClosePin = document.querySelector(".form__input--pin")

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ""

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal"

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} TL</div>
      </div>
    `

    containerMovements.insertAdjacentHTML("afterbegin", html)
  })
}

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} TL`
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes} TL`

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)} TL`

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest} TL`
}

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("")
  })
}
createUsernames(accounts)

const updateUI = function (acc) {
  displayMovements(acc.movements)

  calcDisplayBalance(acc)

  calcDisplaySummary(acc)
}

let currentAccount

btnLogin.addEventListener("click", function (e) {
  e.preventDefault()

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  )
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`
    containerApp.style.opacity = 100

    inputLoginUsername.value = inputLoginPin.value = ""
    inputLoginPin.blur()

    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = ""

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    updateUI(currentAccount)
  }
})

btnLoan.addEventListener("click", function (e) {
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount)

    updateUI(currentAccount)
  }
  inputLoanAmount.value = ""
})

btnClose.addEventListener("click", function (e) {
  e.preventDefault()

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    )
    console.log(index)

    accounts.splice(index, 1)

    containerApp.style.opacity = 0
  }

  inputCloseUsername.value = inputClosePin.value = ""
})

let sorted = false
btnSort.addEventListener("click", function (e) {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})

/**
 * .fill() : Bir arrayin tüm elemanlarını belirtilen bir değer ile doldurur. fill() methodu, başlangıç ve bitiş indexleri belirtilerek kullanılabilir. fill(başlangıç indexi, bitiş indexi, doldurulacak değer)
 */
const x = new Array(7)
console.log(x)
//console.log(x.map(() => 5))

x.fill(1, 3, 5)
console.log(x)

const arr = [1, 2, 3, 4, 5, 6, 7]
arr.fill(23, 4, 6)
console.log(arr)

/**
 * .from() : Array benzeri bir objeden array oluşturur.
 */

const y = Array.from({ length: 7 }, () => 1)
console.log(y)

const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z)

// Array Methot Örnekleri

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .map((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0)
console.log(bankDepositSum)

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : ++count), 0)

console.log(numDeposits1000)

let a = 10
console.log(++a) // 11 Burada önce a'yı 1 arttırıp sonra yazdırır.
console.log(a)

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {

      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums
    },
    { deposits: 0, withdrawals: 0 }
  )

console.log(deposits, withdrawals)

const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1)

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ')

  return capitzalize(titleCase)
};

console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a LONG title but not too long'))
console.log(convertTitleCase('and here is another title with an EXAMPLE'))



const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
console.log(dogs)


const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(dogSarah)
console.log(
  `Sarah's dog is eating too ${
  dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
)


console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`)

console.log(dogs.some(dog => dog.curFood === dog.recFood))


const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1

console.log(dogs.some(checkEatingOkay))

// 7.
console.log(dogs.filter(checkEatingOkay))


const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted)
