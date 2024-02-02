/**
 * Jquery Javascript ile yazılmıştır.
 * Hızlı ve kolay bir şekilde html elementlerine erişim sağlar.
 * Animasyonlar, ajax, eventler, css işlemleri gibi birçok işlemi kolayca yapabiliriz.
 */

// Jquery kullanımı
// 1. Jquery kütüphanesini projemize dahil ediyoruz.
// 2. Jquery kodlarını yazıyoruz.
$(document).ready(function () {
  $("h1").css("color", "red"); // h1 elementinin rengini kırmızı yapar.
});

// $ işareti ile başlayan fonksiyonlar jquery fonksiyonlarıdır.
// $(document).ready() fonksiyonu sayfa yüklendiğinde çalıştırılacak kodları içerir.
// document.queryselector("h1") yerine $("h1") kullanarak h1 elementine erişebiliriz.

$("h1").addClass("big-title"); // h1 elementine big-title class'ını ekler.
$("h1").text("Yeni başlık"); // h1 elementinin textini değiştirir.

$("button").text("Bana Dokunma");

let src = $("img").attr("src"); // img elementinin src attribute'unu alır.
console.log(src);

let link = $("a").attr("href", "https://www.google.com"); // a elementinin href attribute'unu değiştirir.
console.log(link);

$("h1").click(function () {
  $("h1").css("color", "purple"); // click olayında tetiklenirse h1 elementinin renki pur
});

$("button").click(function () {
  $("h1").css("color", "red");
});

$("input").keypress(function (event) {
  console.log(event.key);
}); // input elementine herhangi bir tuşa basıldığında tetiklenir.

$("h1").on("mouseover", function () {
  $("h1").css("color", "green"); // mouseover olayında tetiklenirse h1 elementinin renki
});

$("h1").before("<button>Yeni</button>")

$("h1").after("<button>Yeni</button>")

$("h1").prepend("<button>Yeni</button>")
$("h1").append("<button>Yeni</button>")

/**
 * .before() -> seçilen elementin öncesine yeni bir element ekler.
 * .after() -> seçilen elementin sonrasına yeni bir element ekler.
 * .prepend() -> seçilen elementin içerisine başına yeni bir element ekler.
 * .append() -> seçilen elementin içerisine sonuna yeni bir element ekler.
 */

$("button").on("click", function(){
    $("h1").slideToggle(); // click olayında h1 elementinin slide animasyonunu tetikler.
    $("h1").fadeOut(); // click olayında h1 elementinin fade animasyonunu tetikler.
    $("h1").fadeIn();
    $("h1").animate({opacity: 0.5});
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").toggle();
    $("h1").fadeToggle();
    $("h1").slideToggle();
    $("h1").animate({margin: "20%"});
})