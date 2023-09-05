/**
 JavaScript Nedir?
 * JavaScript, web sayfalarını etkileşimli hale getirmek için kullanılan bir programlama dilidir.
 * JS ile web sayfalarında dinamik içerikler oluşturabiliriz.
 * HTML : Web sayfalarının iskeletini oluşturmak için kullanılır.
 * CSS : Web sayfalarının tasarımını oluşturmak için kullanılır.
 * JS : Web sayfalarını etkileşimli hale getirmek için kullanılır.
 * console.log() : Konsola yazdırmak için kullanılır.
 * 
 */

 console.log("Javascript'e İlk Adımımızı Attık!")

 /*
 Değişkenler
 - Değişkenler bir veri tutucudur.
 - var anahtar kelimesi ile tanımlanır. 
 - var ve let farkı :  var anahtar kelimesi, tanımlandığı kapsamın içinde bulunduğu fonksiyon veya dosya boyunca erişilebilirken, let ve const anahtar kelimeleri sadece tanımlandıkları blok kapsamında geçerlidirler..
 - var eski bir değişken tanımlama yöntemidir. let kullanılması önerilir.
 - const : Sabit değer tanımlamak için kullanılır. Değeri değiştirilemez.
 Değişken Tanımlama Kuralları
 - Rakam ile başlayamaz.
 - Büyük küçük harf duyarlılığı vardır.
 - Türkçe karakter kullanılmaz.
 - Boşluk bırakılmaz.
 - Harf, rakam, alt çizgi ve dolar işareti kullanılabilir.

 */

var firstName = "Berkcan"
console.log(firstName)

let tarih = 2023
console.log(tarih)

let person = "Berkcan" //String
let age = 23 // Number
let isMarried = false // Boolean
let PI = 3.14


/**
 Veri Türleri
 - Number : Sayısal veri türüdür. Ondalıklı ve ondalıksız sayılar tutabilir.
 - String : Metinsel veri türüdür.
 - Boolean : Mantıksal veri türüdür.
 - undefined : Değeri belirsiz olan veri türüdür.
 - null : Boş değer anlamına gelir.

 typeof : Değişkenin veri türünü öğrenmek için kullanılır.


 */

let number1 = 10
console.log(typeof number1)
console.log(typeof person)
console.log(typeof isMarried)
console.log(typeof PI)

let age2 = 23
age3 = 24
console.log(age2)

const birthYear = 1999
birthYear = 2000
console.log(birthYear)