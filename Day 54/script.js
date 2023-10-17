/**
 * OOP(Object Oriented Programming) - Nesne Yönelimli Programlama
 * Nesneye yöneli bir paradigmadır. Nesne kavramı üzerine kuruludur.
 * Soyut kavramları somut kavramlara dönüştürmeye yarar.
 * OOP'de nesnelerin birbirleriyle olan etkileşimleri önemlidir. Etkileşimleri çok büyük önem taşır.
 * Abstract, Encapsulation, Inheritance, Polymorphism
 * Abstract: Soyutlama demektir. Soyutlama yapmak için sınıflar kullanılır. Sınıfların özellikleri ve metodları vardır.
 * Encapsulation: Kapsülleme demektir. Sınıfların özelliklerini ve metodlarını bir arada tutmaktır.
 * Inheritance: Kalıtım demektir. Bir sınıfın özelliklerini başka bir sınıfa aktarmaktır.
 * Polymorphism: Çok biçimlilik demektir. Bir nesnenin farklı şekillerde kullanılmasıdır.
 */

const Person = function(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
    // this anahatar kelimesi ile oluşturulan her bir özellik ve metod prototype'a eklenir.

    this.calcAge = function(){
        console.log(2023 - this.birthYear)
    }
}

const berkcan = new Person('Berkcan', 1999)
console.log(berkcan)
berkcan.calcAge()

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda, jack)
jack.calcAge()
