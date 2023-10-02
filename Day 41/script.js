const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Merhaba')
greeterHey('Berkcan')

greet("Merhaba")("Berkcan")

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr("Selam")("Berkcan")
/**
 * return ile fonksiyon döndürüp fonksiyonu çağırmak yerine
 * fonksiyonu direk çağırabiliriz.
 
 */

const lufthansa = {
    airline: 'Türk Hava Yolları',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} rezervasyonu ${this.airline} havayolları ${flightNum} uçuşuna yapıldı.`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }

    
}

lufthansa.book(239, 'Berkcan')
lufthansa.book(635, 'Ahmet')
console.log(lufthansa)

const eurowings = {
    name : 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book

// book(23, 'Sarah Williams') : Burada this undefined olur. Çünkü fonksiyonu çağıran obje yok.

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

book.call(lufthansa, 239, 'Mary Cooper')


const flightData = [583, 'George Cooper']
book.apply(eurowings, flightData)

/**
 * apply fonksiyonu call fonksiyonu ile aynı işi yapar. Farkı ise apply fonksiyonu array olarak parametre alır.
 * apply : apply(obj, [param1, param2, ...])
 * call : call(obj, param1, param2, ...)
 call ve apply bizim fonksiyonumuzu çağıran objeyi belirler. Fonksiyonun içindeki this'i belirler.
 bind : bind fonksiyonu call fonksiyonu ile aynı işi yapar. Farkı ise bind fonksiyonu fonksiyonu çağırmaz. Fonksiyonu döndürür.
 bind : bind(obj, param1, param2, ...)
 Call ve Apply fonksiyonları bir fonksiyonu hemen çalıştırırken, bind fonksiyonu bize yeni bir kopya üretmektedir.
 */


const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)

bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Berkcan')
bookEW23('Ahmet')

lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this)
    this.planes++
    console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))


const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100))


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(0.23)
console.log(addVAT2(100))


const poll = {
    "question" : "En sevdiğiniz programlama dili nedir?",
    "options" : ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    "answers" : new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Bir seçim yapınız.)`))
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
        console.log(this.answers)
        this.displayResults()
        this.displayResults('string')
    },
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers)
        }else if(type === 'string'){
            console.log(`Anket Sonuçları ${this.answers.join(', ')}`)
        }
    }

}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))



