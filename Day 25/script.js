// Strings 

/** 
 * String metinsel verileri tutmak için kullanılan veri tipidir.
 * 
 */

let name = "John"
let surname = "Doe"
let age = 40
let country = "ABD"

console.log("Benim adım " + name + " " + surname + ", " + age + " yaşındayım ve ülkem " + country + " 'dir.")

// Template Literals
/**
 * Template Literals ile string ifadeleri daha kolay bir şekilde yazabiliriz.
 * ` ` arasına yazılan ifadelerde ${} içerisine değişkenlerimizi yazabiliriz.
 */

console.log(`Benim adım ${name} ${surname}, ${age} yaşındayım ve ülkem ${country} 'dir.`)

// String Metodları

let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

/**
 * .toUpperCase() : String ifadenin tüm karakterlerini büyük harfe çevirir.
 * .toLowerCase() : String ifadenin tüm karakterlerini küçük harfe çevirir.
 * .length : String ifadenin uzunluğunu verir.
 * .slice() : String ifadenin istediğimiz kısmını alır. (Başlangıç, bitiş)
 * .substring() : String ifadenin istediğimiz kısmını alır. (Başlangıç, bitiş)
 * .replace() : String ifadenin istediğimiz kısmını değiştirir. (Değiştirilecek, Yeni)
 * .trim() : String ifadenin başındaki ve sonundaki boşlukları siler.
 */

console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.length)
console.log(string.slice(0, 10))
console.log(string.substring(0, 10))
console.log(string.replace("Lorem", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."))
console.log(string.trim())


let number = "123456789"
let number2 = 123
console.log(Number(number)) // String ifadeyi sayıya çevirir.
console.log(parseInt("10.6")) // String ifadeyi sayıya çevirir.
console.log(number2.toPrecision(2)) // Sayıyı istediğimiz basamak kadar yuvarlar.4


/** Math Metotları
 * Math.round() : Sayıyı en yakın tam sayıya yuvarlar.
 * Math.ceil() : Sayıyı bir üst tam sayıya yuvarlar.
 * Math.floor() : Sayıyı bir alt tam sayıya yuvarlar.
 * Math.sqrt() : Sayının karekökünü alır.
 * Math.abs() : Sayının mutlak değerini alır.
 * Math.pow() : Sayının üssünü alır.
 * Math.random() : 0 ile 1 arasında rastgele sayı üretir.
 * Math.PI : Pi sayısını verir.
 * Math.min() : Verilen sayıların en küçüğünü verir.
 * Math.max() : Verilen sayıların en büyüğünü verir.
 * 
 */

console.log(Math.round(10.6))
console.log(Math.round(10.4))
console.log(Math.ceil(10.6))
console.log(Math.floor(10.6))
console.log(Math.sqrt(16)) 
console.log(Math.abs(-10))
console.log(Math.pow(2, 4))
console.log(Math.random())


let now = new Date() // Şu anki tarihi verir.
console.log(now)

console.log(now.getFullYear()) // Yıl bilgisini verir.
console.log(now.getMonth()) // Ay bilgisini verir.
console.log(now.getDate()) // Gün bilgisini verir.
console.log(now.getDay()) // Haftanın gününü verir.
console.log(now.getHours()) // Saat bilgisini verir.
console.log(now.getMinutes()) // Dakika bilgisini verir.
console.log(now.getSeconds()) // Saniye bilgisini verir.
console.log(now.getMilliseconds()) // Milisaniye bilgisini verir.
console.log(now.getTime()) // Milisaniye cinsinden tarih bilgisini verir.
console.log(now.getDate()) // Gün bilgisini verir.


console.log(now.setFullYear(2021)) // Yıl bilgisini değiştirir.
console.log(now.setMonth(11)) // Ay bilgisini değiştirir.
console.log(now.setDate(25)) // Gün bilgisini değiştirir.


now = new Date()
let year = new Date(1999, 4, 12) // Yıl, Ay, Gün
let age2 = now.getFullYear() - year.getFullYear()
console.log(age2)