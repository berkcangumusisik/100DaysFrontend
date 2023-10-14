const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
};

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})


console.log(document.documentElement) // <html> element
console.log(document.head) // <head> element
console.log(document.body) // <body> element

const header = document.querySelector(".header")
const allSections = document.querySelectorAll(".section") // .querySelectorAll bize NodeList döndürür
console.log(allSections)

document.getElementById("section--1")
const allButtons = document.getElementsByTagName("button")

// getElementsByTagName : HTMLCollection döndürür. içindeki elementler canlıdır. yani elementlerdeki değişiklikler otomatik olarak HTMLCollection içinde de değişir.

console.log(document.getElementsByClassName("btn")) // HTMLCollection döndürür

const message = document.createElement("div")
message.classList.add("cookie-message")
message.textContent = "İyileştirilmiş işlevsellik ve analiz için çerezleri kullanıyoruz."
message.innerHTML = "İyileştirilmiş işlevsellik ve analiz için çerezleri kullanıyoruz. <button class='btn btn--close-cookie'>Anladım</button>"

header.prepend(message) // headerın başına message ekler
//header.append(message) // headerın sonuna message ekler

// Aynı element prepend ve append ile eklendiğinde sadece bir kere eklenir. Yani append ile eklenen element prepend ile eklenen elementi silmez.

//header.append(message.cloneNode(true)) // headerın sonuna message ekler. cloneNode(true) ile message elementinin kopyasını oluşturur ve onu ekler. Böylece append ile eklenen element prepend ile eklenen elementi silmez.

document.querySelector(".btn--close-cookie").addEventListener("click", function () {
  message.remove()
})

/**
 * style ile elementin inline css özelliklerini değiştirebiliriz.
 * backgroundColor ile arka plan rengini değiştirebiliriz.
 * camelCase ile yazılır.
 * width : elementin genişliğini değiştirir.
 * height : elementin yüksekliğini değiştirir.
 */
message.style.backgroundColor = "#37383d"
message.style.width = "120%"
console.log(message.style.height)
console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color) // getComputedStyle ile elementin tüm css özelliklerini alabiliriz. Burada color özelliğini aldık.

console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"

document.documentElement.style.setProperty("--color-primary", "orangered") // :root içindeki --color-primary değişkenini değiştirdik.

const logo = document.querySelector(".nav__logo")
console.log(logo.alt) // alt özelliğini aldık.
console.log(logo.src) // src özelliğini aldık.
console.log(logo.className) // className özelliğini aldık.

logo.alt = "Harika logo"

console.log(logo.getAttribute("designer")) // designer özelliğini aldık.

logo.setAttribute("company", "Bankist")

const link = document.querySelector(".nav__link--btn")
console.log(link.href) // href özelliğini aldık.
console.log(link.getAttribute("href")) // href özelliğini aldık.

logo.classList.add("c", "j") // classList.add ile class ekleyebiliriz.
logo.classList.remove("c", "j") // classList.remove ile class silebiliriz.
logo.classList.toggle("c") // classList.toggle ile class varsa siler yoksa ekler.
logo.classList.contains("c") // classList.contains ile class varsa true yoksa false döndürür.

const btnScrollTo = document.querySelector(".btn--scroll-to")
const section1 = document.querySelector("#section--1")

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect() // getBoundingClientRect ile elementin boyutlarını ve konumunu alabiliriz.
  console.log(s1coords)

  console.log(e.target.getBoundingClientRect()) // e.target.getBoundingClientRect() ile butonun boyutlarını ve konumunu alabiliriz.

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset) // window.pageXOffset ile yatay kaydırma değerini alabiliriz.

  console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth) // document.documentElement.clientHeight ile viewport yüksekliğini alabiliriz.

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset) // window.scrollTo ile sayfayı istediğimiz konuma kaydırabiliriz.

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // }) // window.scrollTo ile sayfayı istediğimiz konuma kaydırabiliriz. smooth ile kaydırma animasyonlu olur.

  section1.scrollIntoView({ behavior: "smooth" }) // section1.scrollIntoView ile section1 elementine kaydırabiliriz. smooth ile kaydırma animasyonlu olur.
})