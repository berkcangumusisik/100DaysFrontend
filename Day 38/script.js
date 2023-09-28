/**
 * Set Özellikleri
 * Setler birbirinden farklı değerleri tutar.
 * Setler sırasızdır.
 * Setlerde indeksleme yoktur.
 * Aynı değerlerden sadece bir tane tutar. Benzersizdir.
 .size ile eleman sayısını öğrenebiliriz.
 .has() ile eleman var mı yok mu kontrol edebiliriz.
 .add() ile eleman ekleyebiliriz.
 .delete() ile eleman silebiliriz.

 */
const orderSet = new Set([
    "Makarna",
    "Pizza",
    "Pizza",
    "Risotto",
    "Pizza",
])

console.log(orderSet) // Set(3) {"Makarna", "Pizza", "Risotto"}
console.log(orderSet.size) // 3 
console.log(orderSet.has("Bread")) // false
console.log(orderSet.has("Pizza")) // true
orderSet.add("Pasta")
orderSet.add("Pasta") 
orderSet.delete("Risotto")
console.log(orderSet) // Set(4) {"Makarna", "Pizza", "Pasta"}

for(const order of orderSet) console.log(order) // Makarna Pizza Pasta

const staff = ["Garson", "Aşçı", "Garson", "Garson", "Temizlikçi", "Aşçı"]

const staffUnique = [...new Set(staff)]
console.log(staffUnique) 

console.log(new Set(["Garson", "Aşçı", "Garson", "Garson", "Temizlikçi", "Aşçı"]).size)
console.log(new Set("Berkcan"))

/**
 Map 
 * Mapler key-value şeklinde değer tutar.
 * Mapler sırasızdır.
 * Maplerde indeksleme yoktur. key ile değerlere ulaşırız.
 * Aynı key değerlerini bir defa tutar. Benzersizdir.
 * .set ile eleman ekleriz.
 * .get ile eleman alırız.
 * .size ile eleman sayısını öğrenebiliriz.
 * .has() ile eleman var mı yok mu kontrol edebiliriz.
 * .delete() ile eleman silebiliriz.
 * .clear() ile mapi tamamen temizleyebiliriz.
 */


const rest = new Map()
rest.set("name", "Pizza Roma")
rest.set(1, "İstanbul")
console.log(rest.set(2, "Ankara"))

rest
    .set("Kategori", ["İtalyan", "Pizza", "Vejeteryan", "Organik"])
    .set("Açılış", 11)
    .set("Kapanış", 23)
    .set(true, "Restoran açık")
    .set(false, "Restoran kapalı")

console.log(rest.get("name"))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 21
console.log(rest.get(time > rest.get("Açılış") && time < rest.get("Kapanış")))

console.log(rest.has("Kategori"))
rest.delete(2)
// rest.clear()

console.log(rest.size)

const question = new Map([
    "Soru", "En iyi programlama dili hangisidir?",
    [1, "C"],
    [2, "Java"],
    [3, "Javascript"],
    ["Cevap", 3],
    [true, "Tebrikler doğru cevap"],
    [false, "Yanlış cevap, tekrar deneyin"]
])

console.log(question)


for(const [key, value] of question) {
    if(typeof key === "number") console.log(`Soru ${key}: ${value}`)
}

const answer = Number(prompt("Cevabınız nedir?"))
console.log(answer)

console.log(question.get(question.get("Cevap") === answer))

console.log([...question])
console.log([...question.keys()])
console.log([...question.values()])
