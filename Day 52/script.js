const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
const btnScrollTo = document.querySelector(".btn--scroll-to")
const section1 = document.querySelector("#section--1")
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll(".operations__tab")
const tabsContainer = document.querySelector(".operations__tab-container")
const tabsContent = document.querySelectorAll(".operations__content")

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


const message = document.createElement("div")
message.classList.add("cookie-message")
message.textContent = "İyileştirilmiş işlevsellik ve analiz için çerezleri kullanıyoruz."
message.innerHTML = "İyileştirilmiş işlevsellik ve analiz için çerezleri kullanıyoruz. <button class='btn btn--close-cookie'>Anladım</button>"

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect() // 
  console.log(s1coords)

  console.log(e.target.getBoundingClientRect()) 

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset) 
  console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth) 

  section1.scrollIntoView({ behavior: "smooth" }) 
})

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault()
//     const id = this.getAttribute("href")
//     console.log(id)
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" })
//   })
// })

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target)

  if (e.target.classList.contains("nav__link")) {
    e.preventDefault()
    const id = e.target.getAttribute("href")
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
})


tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab")

  if (!clicked) return

  tabs.forEach(t => t.classList.remove("operations__tab--active"))
  tabsContent.forEach(c => c.classList.remove("operations__content--active"))

  clicked.classList.add("operations__tab--active")

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")

})

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target
    const siblings = link.closest(".nav").querySelectorAll(".nav__link")
    const logo = link.closest(".nav").querySelector("img")

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity
    })
    logo.style.opacity = opacity
  }
}
nav.addEventListener("mouseover", function (e) {
  handleHover(e, 0.5)
})

nav.addEventListener("mouseout", function (e) {
  handleHover(e, 1)
})

//mouseOver : Bir elementin üzerine gelindiğinde çalışır. İçerideki tüm elementler için de çalışır. 

//mouseEnter : Bir elementin üzerine gelindiğinde çalışır. Sadece o element için çalışır.

//mouseOut : Bir elementin üzerinden çıkıldığında çalışır. İçerideki tüm elementler için de çalışır.
const h1 = document.querySelector("h1")
const alertH1 = h1.addEventListener("mouseenter", function (e) {
  alert("Tebrikler! Başardın!")
})

h1.addEventListener("mouseenter",alertH1)

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
console.log(randomColor(0, 255))

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor()
  console.log("LINK", e.target, e.currentTarget)
  console.log(e.currentTarget === this)
})

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor()

  console.log("CONTAINER", e.target, e.currentTarget)
})

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor()
  console.log("NAV", e.target, e.currentTarget)
})

const H1 = document.querySelector("h1")
console.log(H1.querySelectorAll(".highlight"))
console.log(H1.childNodes)
console.log(H1.children)
H1.firstElementChild.style.color = "white"
H1.lastElementChild.style.color = "orangered"


console.log(H1.parentNode)
console.log(H1.parentElement)

H1.closest(".header").style.background = "var(--gradient-secondary)"
H1.closest("h1").style.background = "var(--gradient-primary)"


