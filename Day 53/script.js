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
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

for (let i = 0 ; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
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

const initialCoords = section1.getBoundingClientRect()
window.addEventListener("scroll", function (e) {
  if(window.scrollY > initialCoords.top) nav.classList.add("sticky")
  else nav.classList.remove("sticky")
})

const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry)
  })
}

const obsOptions = {
  root: null,
  threshold: [0, 0.2]
}

const observer = new IntersectionObserver(obsCallBack, obsOptions)
observer.observe(section1)

const header = document.querySelector(".header")
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) {
  const [entry] = entries
  if (!entry.isIntersecting) nav.classList.add("sticky")
  else nav.classList.remove("sticky")
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`	
})

headerObserver.observe(header)
/** 
 * Intersection Observer : Bir elementin görünüp görünmediğini kontrol eder.
 * 
 */

const allSections = document.querySelectorAll(".section")
const revealSection = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) return
  entry.target.classList.remove("section--hidden")
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})
allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add("section--hidden")
})

const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
})

imgTargets.forEach(img => imgObserver.observe(img))


const slider = function () {
  const slides = document.querySelectorAll('.slide')
  const btnLeft = document.querySelector('.slider__btn--left')
  const btnRight = document.querySelector('.slider__btn--right')
  const dotContainer = document.querySelector('.dots')

  let curSlide = 0
  const maxSlide = slides.length

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  }

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'))

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active')
  }

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    )
  }

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0
    } else {
      curSlide++
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0)
    createDots()

    activateDot(0)
  }
  init()

  // Event handlers
  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide()
    e.key === 'ArrowRight' && nextSlide()
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset
      goToSlide(slide)
      activateDot(slide)
    }
  })
}
slider()

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e)
})

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e)
})

window.addEventListener('beforeunload', function (e) {
  e.preventDefault()
  console.log(e)
  e.returnValue = ''
})