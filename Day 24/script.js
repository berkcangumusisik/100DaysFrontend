/**
 * Ternary Operator
 * koşul ? true : false
 */

let number = 100
let result = number % 2 === 0 ? "Çift" : "Tek"
console.log(result)


let a = 5
let b = 10
let c;

c = a > b ? (a - b) : (b - a)
console.log(c)


/**
 * Switch Case
 switch (key) {
    case value:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
        break;
}
 */

let day = 1
switch (day) {
    case 1 : console.log("Pazartesi"); break;
    case 2 : console.log("Salı"); break;
    case 3 : console.log("Çarşamba"); break;
    case 4 : console.log("Perşembe"); break;
    case 5 : console.log("Cuma"); break;
    case 6 : console.log("Cumartesi"); break;
    case 7 : console.log("Pazar"); break; 
    default: console.log("Hatalı Giriş"); break;
}


const bill = 275;
let tip


if(50 < bill < 300 ){
    tip = (bill * 15) / 100
}else{
    tip = (bill * 20) / 100
}

let sum = bill + tip

console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value " + sum ) 



let sayi, kare
sayi = 5
if(sayi < 0){
    console.log("Negatif sayı girdiniz")
}else{
    kare = sayi * sayi
    console.log(kare)
}


