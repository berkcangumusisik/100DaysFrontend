// Diziler(Array) 

/**
 * Diziler, birden fazla veriyi tek bir değişkende saklamamızı sağlayan veri tipleridir.
 * [] köşeli parantezler içerisinde tanımlanırlar.
 * Dizilerin içerisinde birden fazla veri tutabiliriz.
 * Diziler 0'dan başlayan index numaralarına sahiptir.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers[0]) // 1
console.log(numbers[1]) // 2
console.log(numbers[2]) // 3
console.log(numbers[3]) // 4
console.log(numbers[4]) // 5
console.log(numbers[5]) // 6
console.log(numbers[6]) // 7

let array = ["Ahmet", 25, true, null, undefined, ["Sinema", "Kitap"]]

array[0] = "Mehmet"
console.log(array)

/**
 *Dizi Metodları
 .length -> Dizinin eleman sayısını verir.
 .toString() -> Dizinin elemanlarını string'e çevirir.
 .join() -> Dizinin elemanlarını nasıl birleştireceğimizi belirler.
 .pop() -> Dizinin son elemanını siler.
 .shift() -> Dizinin ilk elemanını siler.
 .push() -> Dizinin sonuna eleman ekler.
 .unshift() -> Dizinin başına eleman ekler.
 .concat() -> Dizileri birleştirir.
 .splice() -> Dizinin istediğimiz yerine eleman ekler.
 .indexOf() -> Dizinin istediğimiz elemanının index numarasını verir.
 .includes() -> Dizinin istediğimiz elemanının olup olmadığını kontrol eder.
 *   */ 

let students = ["Ahmet", "Mehmet", "Ayşe", "Fatma"]
console.log(students.length) // 4
console.log(students.toString()) // Ahmet,Mehmet,Ayşe,Fatma
students.join("-") // Ahmet Mehmet Ayşe Fatma
students.pop()
console.log(students) // ["Ahmet", "Mehmet", "Ayşe"]
students.shift()
console.log(students) // ["Mehmet", "Ayşe"]
students.push("Ali")
console.log(students) // ["Mehmet", "Ayşe", "Ali"]
students.unshift("Fatma")
console.log(students) // ["Fatma", "Mehmet", "Ayşe", "Ali"]


let markalar1 = ["BMW", "Mercedes", "Opel", "Mazda"]
let markalar2 = ["Renault", "Fiat", "Seat"]

let tumMarkalar = markalar1.concat(markalar2)
console.log(tumMarkalar) // ["BMW", "Mercedes", "Opel", "Mazda", "Renault", "Fiat", "Seat"]

console.log(tumMarkalar.indexOf("Fiat")) // 5
console.log(tumMarkalar.includes("BMW")) // true


