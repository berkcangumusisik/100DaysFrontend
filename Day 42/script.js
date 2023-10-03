const runOnce = function () {
    console.log("Bu tek seferlik çalışacak")
}

runOnce()

// (function (){
//     console.log("Bu da tek seferlik çalışacak")
// })()

// IIFE fonksiyonu : Immediately Invoked Function Expression (Hemen çağrılan fonksiyon ifadesi) isimsiz fonksiyonları çağırmak için kullanılır. (function () {})() şeklinde kullanılır. içindeki değişkenler dışarıdan erişilemez. Bu fonksiyonlar genelde bir kere çalıştırılacak kodlar için kullanılır.

// (() => console.log("Bu da tek seferlik çalışacak"))()


/**
 * 
 * Clousure : Bir fonksiyonun dışarıdan erişilemeyen değişkenlere erişmesi.
 */
const secureBooking = function(){
    let passengerCount = 0

    return function(){
        passengerCount++
        console.log(`${passengerCount} yolcu`)
    }
}

const booker = secureBooking()

booker()
booker()
booker()

console.dir(booker)


let f 
const g = function(){
    const a = 23
    f = function(){
        console.log(a * 2)
    }
}

const h = function(){
    const b = 777
    f = function(){
        console.log(b * 2)
    }
}
g()
f()
h()
f()


const boardPassengers = function(n, wait){
    const perGroup = n / 3

    setTimeout(function(){
        console.log(`Şimdi ${n} yolcu var. ${perGroup} grup var.`)
    }, wait * 1000)

    console.log(`Bekleniyor...`)
}

const perGroup = 1000
boardPassengers(180, 3)

(function(){
    const header = document.querySelector('h1')
    header.style.color = 'red'
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue'
    })
})()