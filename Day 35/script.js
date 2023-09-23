// Destructuring Arrays (Dizileri Parçalama)

const restaurant = {
    name : "İtalyan Mutfağı",
    location : "İstanbul",
    categories : ["İtalyan", "Pizza", "Vejeteryan", "Organik"],
    starterMenu : ["Foccacia", "Brushcetta", "Sarımsaklı Ekmek", "Caprese Salatası"],
    mainMenu : ["Pizza", "Makarna", "Risotto"],

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = "20:00", address}){
        console.log("Siparişiniz alındı", this.starterMenu[starterIndex], this.mainMenu[mainIndex], time, address)
    },

    orderPasta(ing1, ing2, ing3){
        console.log("Makarna hazırlanıyor", ing1, ing2, ing3)
    },

    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient)
        console.log(otherIngredients)
    }


}

const arr = [2,3,4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x,y,z] = arr
console.log(x,y,z) // 2 3 4

const [main, secondary] = restaurant.categories
console.log(main, secondary) // İtalyan Pizza

const temp = main
main = secondary
secondary = temp
console.log(main, secondary) // Pizza İtalyan


const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse) // Sarımsaklı Ekmek Pizza

const nested = [2,4,[5,6]]
const [i, ,[j,k]] = nested
console.log(i, j, k) // 2 5 6

const weekdays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
const openingHours = {
    [weekdays[3]] : {
        open : 12,
        close : 22
    },
    [weekdays[4]] : {
        open : 11,
        close : 23
    },
    [`Day ${2+4}`] : {
        open : 0,
        close : 24
    }
}

let d = 111
let e = 999
const obj = {d:23, e:7, f:14}
console.log(d,e) // 111 999
({d,e} = obj)


/// ... Rest Operatörü : Bir diziyi parçalayıp, geri kalan elemanları bir değişkene atamak için kullanılır.

const arr1 = [7,8,9]
const badNewArr = [1,2,arr1[0], arr1[1], arr1[2]]
console.log(badNewArr) // [1,2,7,8,9]

const newArr = [1,2, ...arr1]
console.log(newArr) // [1,2,7,8,9]

const newMenu = [...restaurant.mainMenu, "Gnocci"]
console.log(newMenu) // ["Pizza", "Makarna", "Risotto", "Gnocci"]

const mainMenuCopy = [...restaurant.mainMenu]
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu) // ["Foccacia", "Brushcetta", "Sarımsaklı Ekmek", "Caprese Salatası", "Pizza", "Makarna", "Risotto"]


const str = "Ahmet"
const letters = [...str, " ", "K."]
console.log(letters) // ["A", "h", "m", "e", "t", " ", "K."]
console.log(...str) // A h m e t


const ingredients = [prompt("İlk malzeme nedir?"), prompt("İkinci malzeme nedir?"), prompt("Üçüncü malzeme nedir?")]
console.log(ingredients) // ["a", "b", "c"]

restaurant.orderPasta(...ingredients) // Makarna hazırlanıyor a b c


