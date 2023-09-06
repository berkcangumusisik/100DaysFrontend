console.error("Yanlış İşlem")

// Console.error() fonksiyonu ile konsola hata mesajı yazdırabiliriz.

console.warn("Uyarı Mesajı") 

// Console.warn() fonksiyonu ile konsola uyarı mesajı yazdırabiliriz.

console.clear()

// Console.clear() fonksiyonu ile konsoldaki tüm mesajları temizleyebiliriz.


alert("Hoş Geldiniz")

// alert fonksiyonu ile sayfa yüklendiğinde kullanıcıya bir uyarı mesajı gösterebiliriz.


let number = prompt("Lütfen bir sayı giriniz")
console.log(number)
// prompt fonksiyonu ile kullanıcıdan veri alabiliriz. Kullanıcıdan alınan veri string olarak gelir. Eğer kullanıcıdan alınan veriyi number tipine çevirmek istersek parseInt() fonksiyonunu kullanabiliriz.


/**
 Aritmetik Operatörler
 + Toplama
 - Çıkarma
 * Çarpma
 / Bölme
 % Mod Alma
 ** Üs Alma
 ++ Bir arttırma
 */
let a = 10 , b = 20 
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(a++)

let year = 2023
let age = year - 1999
console.log(age)

let firstName = "Mehmet"
let lastName = "Kara"
console.log(firstName + " " + lastName)


/** 
 Atama Operatörleri
 = Atama
 += Topla ve Ata
 -= Çıkar ve Ata
 *= Çarp ve Ata
 /= Böl ve Ata
 %= Mod Al ve Ata
 **= Üs Al ve Ata
 */

let x = 10
x += 10
x -= 5
x *= 4
x /= 2
x %= 3
x **= 2

console.log(x)

/**
 Karşılaştırma Operatörleri
 == Eşitse
 === Hem değer hem de tip eşitse
 != Eşit değilse
 !== Hem değer hem de tip eşit değilse
 > Büyükse
 < Küçükse
 >= Büyük veya eşitse
 <= Küçük veya eşitse
  
 * */

let num1 = 10
let num2 = "10"
console.log(num1 == num2) // true
console.log(num1 === num2) // false
console.log(num1 != num2) // false
console.log(num1 !== num2) // true
console.log(num1 > num2) // false
console.log(num1 < num2) // false
console.log(num1 >= num2) // true
console.log(num1 <= num2) // true


/**
 Mantıksal Operatörler
 && VE : Tüm koşullar doğruysa true döner aksi halde false döner.
 || VEYA : Koşulların en az biri doğruysa true döner aksi halde false döner. 
 ! DEĞİL : Koşulun tersini alır.

 */

console.log((num1 == num2) && (num1 === num2)) // false
console.log((num1 == num2) || (num1 === num2)) // true
console.log(!(num1 == num2)) // true


/**
 Mark ve John şu formül kullanılarak hesaplanan BMI'larını (Vücut Kitle İndeksi) karşılaştırmaya çalışıyorlar: BMI = mass / (height * height)(kg cinsinden kütle ve metre cinsinden boy). öreviniz onlara yardımcı olacak bazı kodlar yazmaktır:

* Mark'ın ve John'un kütlesini ve yüksekliğini massMark, heightMark, massJohnve adlı değişkenlerde saklayın heightJohn.

* Formülü kullanarak her ikisinin de BMI'larını hesaplayın ve sonuçları BMIMarkve adı verilen iki değişkende saklayın BMIJohn.

* BMIMarkve değerini BMIJohnkonsola kaydedin.

* BONUSmarkHigherBMI : Mark'ın John'dan daha yüksek bir BMI'ye sahip olup olmadığı hakkında bilgi içeren bir boole değişkeni oluşturun . Bunu da konsola kaydedin

* TEST VERİLERİ: Marks 78 kg ağırlığında ve 1,69 m boyundadır. John 92 kg ağırlığında ve 1,95 m boyundadır.
 */

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn)
console.log(markHigherBMI)
