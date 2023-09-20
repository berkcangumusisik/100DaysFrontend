/**
Javascript
* Yüksek seviyeli bir programlama dilidir. Yani insanların anlayabileceği bir dildir.
* Çöp toplayıcısı vardır. Bellek yönetimi yapar.
* Yorumlanmış veya tam zamanlı derlenmiş bir dildir.
* Paradigmalı bir dildir. Nesne yönelimli, fonksiyonel ve yapısal programlama özelliklerini içerir.
* Nesne yönelimli programlama dilleri sınıf ve nesne kavramlarını içerir. Javascript'te bu kavramlar vardır.
* Birinci sınıf fonksiyonlardır. Yani fonksiyonlar bir değişkene atanabilir, fonksiyonlar başka fonksiyonlara parametre olarak geçirilebilir ve fonksiyonlar başka fonksiyonlardan dönebilir.
* Dinamik bir dildir. Yani değişkenlerin türleri çalışma zamanında belirlenir.
* Tek iş parçacıklı bir dildir. Yani aynı anda bir işlem yapabilir.
 */

/**Scope 
 * Bir değişkenin erişilebilir olduğu alan.
 * Global scope: Bütün fonksiyonlar erişebilir.
 * Function scope: Sadece tanımlandığı fonksiyon erişebilir. Local scope olarak da bilinir.
 * Block scope: Sadece tanımlandığı blok erişebilir. ES6 ile gelmiştir. Yalnızca let ve const ile tanımlanan değişkenlerde geçerlidir.
 * Kapsam tek yönlüdür. Bir değişkenin kapsamı içinde tanımlı fonksiyonlar dışarıdan erişebilir. Fakat bir fonksiyonun kapsamı içinde tanımlı değişkenler dışarıdan erişilemez.

 */

function calcAge(birthYear){
    const age = new Date().getFullYear() - birthYear
    function printAge(){
        const output = `${firstName}, sen ${age} yaşındasın. ${birthYear} yılında doğdun.`
        console.log(output)
    }
    printAge()

    if(birthYear >= 1999 && birthYear <= 2021){
        var millenial = true
        const str = `Sen ${age} yaşındasın ve milenyum kuşağındansın.`
        console.log(str)
    }
    return age
}

let firstName = "Berkcan"
calcAge(1999)
//console.log(age) Çalışmaz. Çünkü age değişkeni fonksiyonun kapsamı içinde tanımlıdır.