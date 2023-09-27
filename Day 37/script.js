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
    openingHours,

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


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]


// for(const item  of menu) console.log(item)

console.log(...menu.entries())

for(const [i, el] of menu.entries()){
    console.log(`${i+1}: ${el}`)
}

console.log(restaurant.openingHours["Day 6"])

const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
for(const day of days){
    const open = restaurant.openingHours[day] ?.open || "Kapalı"
    console.log(`${day} günü açılış saati:  ${open}`)
}  

/**
 * ?: ile soru işareti arasına yazılan değer undefined ise false değilse true döner
 */

console.log(restaurant.order?.(0,1) ?? "Metod mevcut değil")

const users = []
if(users.length > 0) console.log(users[0].name)
else console.log("Kullanıcı bulunamadı")

const properties = Object.keys(openingHours) // Object.keys() metodu objenin keylerini array olarak döner
console.log(properties)

let openStr = console.log(`Bu restorant ${properties.length} gün açık`)



for (const day of properties){
    openStr += `${day}, `
}

console.log(openStr)

const values = Object.values(openingHours) // Object.values() metodu objenin value'larını array olarak döner
console.log(values)

const entries = Object.entries(openingHours) // Object.entries() metodu objenin key ve value'larını array olarak döner
console.log(entries)


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

for (const [i, player] of game.scored.entries()){
    console.log(`${i+1}: ${player}`)
}

const odds = Object.values(game.odds)
let average = 0
for(const odd of odds){
    average += odd
}
average /= odds.length
console.log(average)


for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === "x" ? "Beraberlik" : `Kazanan ${game[team]}`
    console.log(`Oranlar ${teamStr}: ${odd}`)
}