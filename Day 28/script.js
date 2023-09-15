/**
 * Function (Fonksiyonlar)
 * Fonksiyonlar, bir işi gerçekleştirmek için tasarlanmış kod bloklarıdır.
 * Kodun tekrar tekrar kullanılabilirliğini sağlar.
 * function fonksiyonAdi(parametre1, parametre2, ...){
    // Kodlar
 }
 // Fonksiyonu çağırma
 fonksiyonAdi(parametre1, parametre2, ...);
 */

function helloWorld(){
    console.log("Merhaba")
}

helloWorld();


function helloWorld2 (isim){
    console.log(`Merhaba ${isim}`)
}

helloWorld2("Berkcan")

// Eğer fonksiyondan çıkan eleman ile dışarıda iş yapacaksam return kullanırım. Eğer sadece ekrana yazdıracaksam return kullanmam.

function age(year){
    console.log(new Date().getFullYear() - year)
}

age(1999)

function fruitProcessor(apples, oranges){
    juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}


appleJuice = fruitProcessor(5,0)
console.log(appleJuice)


calcAge = function(birthYear){
    return new Date().getFullYear() - birthYear
}

console.log(calcAge(1999))

/**
 Arrow Function (Ok Fonksiyonlar)
 - ES6 ile birlikte gelen bir fonksiyon yazma yöntemidir.
 - function anahtar kelimesi yerine => kullanılır.
 - Parametre almazsa parantez içerisinde boş bırakılır.
 - Tek parametre alıyorsa parantez kullanılmayabilir.
 Yapısı
    const fonksiyonAdi = () => {
        // Kodlar
    }
*/



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear
    const retirement = 65 - age
    return `${firstName} emekli olmana ${retirement} yıl var.`
}

console.log(yearsUntilRetirement(1999, "Berkcan"))

const cutPieces = function(fruit){
    return fruit * 4
}


const fruitCutter = function(apples, oranges){
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    return `Meyve suyunuz ${applePieces} parça elma ve ${orangePieces} parça portakaldan oluşmaktadır.`
}

console.log(fruitCutter(2,3))


const calcAverage = (a,b,c) => (a+b+c)/3
console.log(calcAverage(3,4,5))

const scoreDolphins = calcAverage(44,23,71)
const scoreKoalas = calcAverage(65,54,49)
console.log(scoreDolphins, scoreKoalas)
const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2*avgKoalas){
        return `Dolphins kazandı (${avgDolphins} vs. ${avgKoalas})`
    }else if(avgKoalas >= 2*avgDolphins){
        return `Koalas kazandı (${avgKoalas} vs. ${avgDolphins})`
    }else{
        return "Berabere"
    }
}

checkWinner(scoreDolphins, scoreKoalas)


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }
   
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
   
console.log(bills, tips, totals)
  