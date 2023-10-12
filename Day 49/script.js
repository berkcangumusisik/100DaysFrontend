console.log(23 === 23.0) // true

// Temel sayılar 0-10 arasındadır. Binary sayılar 0-2 arasındadır. 

console.log(0.1 + 0.2) // 0.30000000000000004 Bunun sebebi binary sayılarla çalışmasıdır.

console.log(0.1 + 0.2 === 0.3) // false

console.log(Number('23')) // 23 
console.log(+'23') // 23

// Number() fonksiyonu stringi number'a çevirir.

// ParsInt() fonksiyonu stringi integer'a çevirir.
// ParsFloat() fonksiyonu stringi float'a çevirir.

console.log(Number.parseInt('30px')) // 30
console.log(Number.parseInt('e23')) // NaN Çünkü başında sayı olmadığı için çeviremedi.

console.log(Number.parseInt('2.5rem')) // 2
console.log(Number.parseFloat('2.5rem')) // 2.5

// isNaN() fonksiyonu NaN olup olmadığını kontrol eder.
console.log(Number.isNaN(20)) // false
console.log(Number.isNaN('20')) // false
console.log(Number.isNaN(+'20X')) // true

// isFinite() fonksiyonu sayı olup olmadığını kontrol eder.

console.log(Number.isFinite(20)) // true
console.log(Number.isFinite('20')) // false
console.log(Number.isFinite(+'20X')) // false
console.log(Number.isFinite(23 / 0)) // false

// isInteger() fonksiyonu integer olup olmadığını kontrol eder.
console.log(Number.isInteger(23)) // true
console.log(Number.isInteger(23.0)) // true
console.log(Number.isInteger(23 / 0)) // false


// Matematik ve Yuvarlama İşlemleri

// Math.sqrt() fonksiyonu karekök alır.
console.log(Math.sqrt(25)) // 5
console.log(25 ** (1 / 2)) // 5
console.log(8 ** (1 / 3)) // 2

// Math.max() fonksiyonu en büyük sayıyı bulur.
console.log(Math.max(5, 18, 23, 11, 2)) // 23
console.log(Math.max(5, 18, '23', 11, 2)) // 23

// Math.min() fonksiyonu en küçük sayıyı bulur.
console.log(Math.min(5, 18, 23, 11, 2)) // 2

// Math.PI fonksiyonu pi sayısını verir.
console.log(Math.PI * Number.parseFloat('10px') ** 2) // 314.1592653589793

// Math.trunc() fonksiyonu sayının ondalık kısmını atar.
// Math.random() fonksiyonu 0-1 arasında sayı verir.
console.log(Math.trunc(Math.random() * 6) + 1) // 1-6 arasında sayı verir.


const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min
console.log(randomInt(10, 20))

// Math.randomInt() fonksiyonu istediğimiz aralıkta sayı verir.
console.log(Math.randomInt(10, 20))

// Math.trunc() fonksiyonu sayının ondalık kısmını atar.
console.log(Math.trunc(23.3)) // 23
console.log(Math.trunc(23.9)) // 23

// Math.round() fonksiyonu sayıyı yuvarlar.
console.log(Math.round(23.3)) // 23
console.log(Math.round(23.9)) // 24

// Math.ceil() fonksiyonu sayıyı yukarı yuvarlar.
console.log(Math.ceil(23.3)) // 24
console.log(Math.ceil(23.9)) // 24

// Math.floor() fonksiyonu sayıyı aşağı yuvarlar.
console.log(Math.floor(23.3)) // 23
console.log(Math.floor(23.9)) // 23

console.log(Math.trunc(-23.3)) // -23
console.log(Math.floor(-23.3)) // -24

// toFixed() fonksiyonu sayıyı istediğimiz kadar ondalık kısmını alır.

console.log((2.7).toFixed(0)) // 3
console.log((2.7).toFixed(3)) // 2.700


// Remainder Operator (%)

console.log(5 % 2) // 1
console.log(5 / 2) // 2.5
console.log(8 % 3) // 2


const isEven = n => n % 2 === 0
console.log(isEven(8)) // true
console.log(isEven(23)) // false
console.log(isEven(514)) // true


const diameter = 287_460_000_000
console.log(diameter / 2) // 143730000000

const priceCents = 345_99
console.log(priceCents / 100) // 345.99

// _ sayıları okumayı kolaylaştırmak için kullanılır.

// BigInt fonksiyonu çok büyük sayıları tutar.

console.log(2 ** 53 - 1) // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(BigInt(54564216464626352636)) // 54564216464626352636n




