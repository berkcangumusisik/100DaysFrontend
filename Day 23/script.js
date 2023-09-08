/**
 Karar Yapıları
 if(koşul){
    //Koşul doğruysa çalışacak kodlar
 }else if(koşul2){
    //Koşul2 doğruysa çalışacak kodlar
 }else{
    //Koşullar yanlışsa çalışacak kodlar
 }


 */

let age = 5
if(age >= 18){
    console.log("Ehliyet alabilirsiniz🤩")
}else{
    age = 18 - age
    console.log("Ehliyet alamazsınız😢 " + age +" yıl sonra ehliyet alabilir💕")
}

// Bir sayının 10 - 50 arasında olup olmadığını kontrol ediniz.

let number = 10
if(number > 10 && number < 50){
    console.log("Sayı 10 ile 50 arasında")
}else{
    console.log("Sayı 10 ile 50 arasında değil")
}


// Bir sayının pozitif, negatif veya sıfır olduğunu kontrol ediniz.

let number2 = 0
if(number2 >  0){
    console.log("Sayı pozitif")
}else if(number2 < 0){
    console.log("Sayı negatif")
}else{
    console.log("Sayı sıfıra eşit")
}

/**
 2 vize 1 final notu giriliyor. Vize notlarının ortalamasının %40'ı ve final notunun %60'ı alınıyor. 
 Eğer ortalama 50'den büyük eşitse geçti değilse kaldı yazdırın. 
 Geçmek için finalden en az 50 almalıdır. 
 Finalden 70 alındığında dersten geçsin
 */

let vize1 = 50
let vize2 = 50
let final = 70

let ortalama = (vize1 + vize2) * 0.4 + final * 0.6

if(ortalama >= 50  || final >= 70){
    console.log("Dersten geçtiniz")
}else{
    console.log("Dersten kaldınız")
}

// Vize ve final notlarını alarak harf notunu hesaplayınız. 

let vize3 = 50
let final2 = 70
let ortalama2 = vize3  * 0.4 + final2 * 0.6

if(ortalama2 >= 90){
    console.log("AA")
}else if(ortalama2 >= 85){
    console.log("BA")
}else if(ortalama2 >= 80){
    console.log("BB")
}else if(ortalama2 >= 75){
    console.log("CB")
}else if(ortalama2 >= 70){
    console.log("CC")
}else if(ortalama2 >= 65){
    console.log("DC")
}else if(ortalama2 >= 60){
    console.log("DD")
}else if(ortalama2 >= 50){
    console.log("FD")
}else{
    console.log("FF")
}

