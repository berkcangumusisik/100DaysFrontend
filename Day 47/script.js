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


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} TL</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} TL`
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes} TL`

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)} TL`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit  => (deposit * acc.interestRate) / 100)
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
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}
createUsernames(accounts)

const updateUI = function (acc) {
  displayMovements(acc.movements)

  calcDisplayBalance(acc)

  calcDisplaySummary(acc)
}

let currentAccount

btnLogin.addEventListener('click', function (e) {
  e.preventDefault()

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  )
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`
    containerApp.style.opacity = 100

    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = ''

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

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount)

    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault()

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    )
    console.log(index)

    accounts.splice(index, 1)

    containerApp.style.opacity = 0
  }

  inputCloseUsername.value = inputClosePin.value = ''
})

let sorted = false
btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})


/**
 * some : Bir dizideki en az bir elemanın belirtilen koşulu sağlayıp sağlamadığını kontrol eder.
 * every : Bir dizideki tüm elemanların belirtilen koşulu sağlayıp sağlamadığını kontrol eder.
 * flat : Bir dizinin içindeki tüm alt dizileri tek bir dizi haline getirir.
 * flatMap : Bir dizinin içindeki tüm alt dizileri tek bir dizi haline getirir ve belirtilen işlemi uygular.
 */

console.log(movements.includes(-130))
console.log(movements.some(mov => mov === -130))
console.log(movements.every(mov => mov > 0))

const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arr.flat())
console.log(arr.flatMap(arr => arr + 10))


const overalBalance = accounts
 .map(acc => acc.movements)
 .flat()
 .reduce((acc, mov) => acc + mov, 0)
console.log(overalBalance)

const overalBalance2 = accounts
 .flatMap(acc => acc.movements)
 .reduce((acc, mov) => acc + mov, 0)
console.log(overalBalance2)

const owners = ['Berkcan', 'Aslı', 'Mehmet', 'Ayşe']
console.log(owners.sort())


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort())

movements.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    }
)

movements.sort((a, b) => a - b)
