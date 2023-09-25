/** 
 * Rest Operatörü :  Fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar.
 * Spread Operatörü : Dizileri, string ve objeleri birleştirmek veya ayırmak için kullanılır. 
 */

const weekdays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
let openingHours = {
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



const arr = [1,2,...[3,4,5],6,7,8]


const [a,b,...others] = [1,2,3,4,5,6,7,8,9,10] // a = 1, b = 2, others = [3,4,5,6,7,8,9,10]
console.log(a,b,others)

const [pizza , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

// const {Salı, ...weekday} = restaurant.openingHours
// console.log(weekday) // {Çarşamba: {open: 12, close: 22}, Perşembe: {…}, Cuma: {…}, Cumartesi: {…}, Pazar: {…}}

const add = function(...numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    console.log(sum)
}

add(2,3) // 5
add(5,3,7,2) // 17
add(8,2,5,3,2,1,4) // 25

const x = [23,5,7]
add(...x) // 35



// || operatörü : İlk doğru değeri döndürür. Eğer tüm değerler yanlış ise son değeri döndürür.

console.log(3 || "Berkcan") // 3
console.log("" || "Berkcan") // Berkcan
console.log(true || 0) // true
console.log(undefined || null) // null
console.log(undefined || 0 || "" || "Berkcan" || 23 || null) // Berkcan

restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1) // 23

const guests2 = restaurant.numGuests || 10
console.log(guests2) // 23


// && operatörü : İlk yanlış değeri döndürür. Eğer tüm değerler doğru ise son değeri döndürür.

console.log(0 && "Berkcan") // 0
console.log(7 && "Berkcan") // Berkcan
console.log("Berkcan" && 23 && null && "Berkcan") // null


if(restaurant.orderPizza){
    restaurant.orderPizza("Mantar", "Zeytin", "Salam")
}

restaurant.orderPizza && restaurant.orderPizza("Mantar", "Zeytin", "Salam") 

// ??: Nullish Operatörü : null ve undefined değerlerini kontrol eder.

restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests) // 10

const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect) // 0


const rest1 = {
    name : "Capril",
    numGuests : 23,
}

const rest2 = {
    name : "JS Pizza",
    owner : "Berkcan"
}

rest2.numGuests = rest1.numGuests || 10
rest1.numGuests = rest1.numGuests ?? 10


rest1.numGuests ??= 10
rest2.numGuests ??= 10


rest1.owner = rest1.owner && "<Anonim>"
rest2.owner = rest2.owner ?? "<Anonim>"

console.log(rest1)
console.log(rest2)


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

const [players1, players2] = game.players
console.log(players1, players2)

const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

const allPlayers = [...players1, ...players2]
console.log(allPlayers)

const players1Final = [...players1, "Thiago", "Countinho", "Perisic"]
console.log(players1Final)


const {
    odds : {team1, x:draw, team2},
} = game
console.log(team1, draw, team2)


const printGoals = function(...players){
    console.log(`${players.length} gol atıldı`)
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich")
printGoals(...game.scored)

team1 < team2 && console.log("Team 1 kazanır")
team2 < team1 && console.log("Team 2 kazanır")
