/**
 * Arrow Functions(Ok fonksiyonları)
 * function yazmaya gerek kalmadan fonksiyon tanımlamamıza olanak sağlar.
 * Fonksiyonun içinde tek bir işlem varsa süslü parantez kullanmaya gerek yoktur.
 * Örneğin; const merhaba = () => console.log("Merhaba");
 
Regular Function (Klasik Fonksiyonlar)
const hello = function(){
    console.log("Hello");
}

* Regular ile Arrow fonksiyonlarının farkı
 */

const berkcan = {
    firstName : "Berkcan",
    year : 1999,
    calcAge(){
        console.log(this)
        console.log(2023 - this.year)


        const self = this // self = berkcan
        const isMillenial = function(){
            console.log(self)
            console.log(self.year >= 1981 && self.year <= 1996)
        }
        isMillenial();
    },

    greet: () => {
        console.log(this)
        console.log(`Merhaba ${this.firstName}`)
    }
}

berkcan.greet()
berkcan.calcAge()


// Primitives vs Objects (Primitive tipler ve Obje tipler)
/**
 * Primitive tipler: Number, String, Boolean, Undefined, Null, Symbol, BigInt
 * Obje tipler: Object Literals, Arrays, Functions, Dates, Anything else...
 
Reference Types (Referans Tipler) : Bir değişkenin değeri, bellekteki bir yerde saklanır. Değişkenin değeri, bellekteki yerin adresidir. heap bellekteki yerlerde saklanır.

Primitive Types (İlkel Tipler) : Bir değişkenin değeri, bellekteki bir yerde saklanır. Değişkenin değeri, bellekteki yerin kendisidir. stack bellekteki yerlerde saklanır.
 */

let age = 24
let oldAge = age
age = 25
console.log(age) // 25
console.log(oldAge) // 24


const me = {
    name: "Berkcan",
    age: 24
}

const friend = me
friends.age = 27
console.log("Arkadaşının yaşı: ", friend.age) // 27
console.log("Benim yaşım: ", me.age) // 27


let lastName = "Gümüşışık"
let oldLastName = lastName
lastName = "Test"
console.log(lastName, oldLastName) // Test Gümüşışık
