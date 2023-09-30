
const bookings = []
const createBooking = function(flightNum , numPassangers = 1, price = 199 * numPassangers){

    const booking = {
        flightNum,
        numPassangers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)

const flight = 'LH234'
const berkcan = {
    name: 'Berkcan Gümüşışık',
    passport: 123456789
}

const checkIn = function(flightNum, passenger){
    flightNum = "LH999"
    passenger.name = "Mr." + passenger.name

    if(passenger.passport === 123456789){
        alert('Doğrulama Başarılı')}
    else{
        alert('Doğrulama Başarısız')
    }
}

checkIn(flight, berkcan)

const flightNum = flight
const passenger = berkcan

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000)
}

newPassport(berkcan)
checkIn(flight, berkcan)

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function(str, fn){
    console.log(`Orjinal String: ${str}`)
    console.log(`Transformed String: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)


const high5 = function(){
    console.log('👋')
}

document.body.addEventListener('click', high5)
    

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')
greeterHey('Berkcan')
greeterHey('Aslı')

greet('Hello')('Berkcan')

const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr('Hi')('Berkcan')

/**
 * CallBack Fonksiyonlar
 * Tek bir fonksiyonu parametre olarak alan ve bu fonksiyonu başka bir fonksiyonun içinde çalıştıran fonksiyonlardır.
 * => Bir fonksiyonu başka bir fonksiyonun içinde çalıştırmak için kullanılır.
 */