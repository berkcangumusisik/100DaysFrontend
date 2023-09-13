/**
 * Object Nedir?
 * Object, bir değişkenin içerisinde birden fazla değer tutmamızı sağlayan bir veri tipidir.
 * Object, key-value yapısına sahiptir.
 * Object, içerisinde birden fazla key-value tutabilir.
 * . (nokta) veya [] ile erişim sağlanabilir.
 * 
 */
let user1 = {
    "name": "John",
    "surname": "Smith",
    "age": 25,
    "adress": {
        "city": "London",
        "country": "England",
    },
}

console.log(user1.name)
console.log(user1.surname)
console.log(user1["age"])
console.log(user1.adress.city)


/** 
 * Döngüler 
 for(başlangıç değeri; koşul; arttırma/azaltma){
        // kodlar
    }
 For döngüsü, belirli bir koşul sağlanana kadar çalışan döngüdür.
 */

for(let i= 0; i<10; i++){
    console.log(i)
}

let sum = 0
for(let i = 0; i<=100; i++){
    sum += i
}

console.log(sum)

let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum2 = 0

for(let i = 0; i<numbers.length;i++){
    sum2 += numbers[i]
}

console.log(sum2)

/**
 foreach döngüsü, diziler üzerinde gezinmemizi sağlayan döngüdür.
 for (let değişken of dizi){
        // kodlar
    }
 */

let numbers2 = [1,2,3,4,5,6,7,8,9,10]
let sum3 = 0
for(let number of numbers2){
    sum3 += number
}

console.log(sum3)


let user ={
    "name": "John",
    "surname": "Smith",
    "age": 25,
    "password": "12345",
    "email": "john@gmail.com"
}

for (let key in user){
    console.log(key)
    console.log(user[key])
}

/**
    while(koşul){
            // kodlar
        }
 */

let i = 0
while(i<10){
    console.log(i)
    i++
}


/*
    do{
        // kodlar
    }while(koşul)
Do while döngüsü, while döngüsüne benzer. Farkı, koşul sağlanmasa bile döngü en az bir kez çalışır. 
*/

let age = 15
do{
    console.log(age)
}while(age<18)

// break ve continue
// break, döngüyü sonlandırmak için kullanılır.
// continue, döngüdeki bir adımı atlamak için kullanılır.

for(let i = 0; i<10; i++){
    if(i==5){
        break
    }
    console.log(i)
}

for(let i = 0; i<10; i++){
    if(i==5){
        continue
    }
    console.log(i)
}


// Faktöriyel Hesaplama
let number = 5
let factorial = 1

for(let i = 1; i<=number; i++){
    factorial *= i
}

console.log(factorial)

