/**
 * Hoisting (Yukarı kaldırma)
 * Hoisting, JavaScript'in değişkenleri ve fonksiyonları tanımlamadan önce işleme alması anlamına gelir.
 * Bu, bir değişkeni veya fonksiyonu tanımlamadan önce kullanabileceğiniz anlamına gelir.
 * TDZ (Temporal Dead Zone) geçici ölü bölge
 * TDZ, bir değişkenin tanımlanmasından önce erişilemeyeceği anlamına gelir.
 Neden Hoisting? : Gerçek bildiriminden önce değişkenlere ve fonksiyonlara erişebilmenizi sağlar.
 Neden TDZ? : Hataları önlemek için.
 */

 // Variables
//console.log(me) // undefined
//console.log(job) // ReferenceError: Cannot access 'job' before initialization
//console.log(year) 


var me = "Berkcan"
let job = "IT Team Lead"
const year = 1999


// Functions
console.log(addDecl(2,3)) // 5
//console.log(addExpr(2,3)) // Error: addExpr is not a function 
//console.log(addArrow(2,3)) // Error: addArrow is not a function
function addDecl(a,b){
    return a+b
}

const addExpr = function (a,b){
    return a+b
}

const addArrow = (a,b) => a+b

if(!numProducts) deleteShoppingCart()
var numProducts = 10
function deleteShoppingCart(){
    console.log("Tüm ürünler sepetten silindi")
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x) // true
console.log(y === window.y) // false
console.log(z === window.z) // false

// window objesi global objedir ve tüm değişkenler window objesinin altında tanımlanır. Ayrıca windowun işlevi : global scope oluşturmak


/**
 * This keyword
 * This anahtar sözcüğünün kullanıldığı fonksiyonun bağlı olduğu nesneyi referans eder.
 * This, fonksiyonun nasıl çağrıldığına bağlı olarak değişir.
 */

console.log(this) // window objesi

const calcAge = function(birthYear){
    console.log(2023 - this.birthYear)
}
calcAge(1999)

const calcAgeArrow = birthYear => { 
    console.log(2023 - birthYear)
    console.log(this) // window objesi
}
calcAgeArrow(1999)

const berkcan = {
    name: "Berkcan",
    year: 1999,
    calcAge: function(){
        console.log(this) // berkcan objesi
        console.log(2023 - this.year)
    }
}

berkcan.calcAge()