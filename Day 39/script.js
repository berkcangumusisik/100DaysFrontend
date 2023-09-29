const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
])

// 1. Gerçekleşen farklı oyun olaylarından oluşan bir 'events' dizisi oluşturun (kopya yok)
const events = new Set(gameEvents.values())
console.log(events)

// 2. Maçın bitiminde 64. dakikadaki sarı kartın haksız olduğu anlaşıldı. Bu nedenle bu etkinliği oyun etkinlikleri günlüğünden kaldırın.
gameEvents.delete(64)

// 3. Konsola şu dizeyi yazdırın: "Ortalama olarak her 9 dakikada bir bir olay gerçekleşti" (bir oyunun 90 dakika olduğunu unutmayın)
const time = [...gameEvents.keys()].pop()
console.log(
  `Ortalama olarak her ${
    time / gameEvents.size
  } dakikada bir bir olay gerçekleşti`
)

// 4. Olayların üzerinden geçin ve bunları konsola kaydedin, oyunun ilk yarısında mı yoksa ikinci yarısında mı (45 dakika sonra) olduğunu işaretleyin, şu şekilde: [FIRST HALF] 17: ⚽️ GOAL

for (const [min, events] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND"
  console.log(`[${half} HALF] ${min}: ${events}`)
}

// STRINGS
const airline = "TAP Air Portugal"
const plane = "A320"

console.log(plane[0]) // A
console.log(plane[1]) // 3
console.log(plane[2]) // 2

// .length : Bir stringin uzunluğunu verir

console.log(airline.length) // 16
console.log("Berkcan".length) // 7

// .indexOf() : Bir stringin içindeki bir karakterin indexini verir. Aradığımız karakter birden fazla varsa ilk bulduğu indexi verir. Eğer aradığımız karakter yoksa -1 döner.
console.log(airline.indexOf("r")) // 6

// .lastIndexOf() : Tersten aramaya başlar. Aradığımız karakter birden fazla varsa son bulduğu indexi verir.

console.log(airline.lastIndexOf("r")) // 10
console.log(airline.lastIndexOf("portugal"))

// .slice() : Bir stringin içinden istediğimiz kısmı alır. İki parametre alır. İlk parametre başlangıç indexi, ikinci parametre ise bitiş indexi. Bitiş indexi dahil değildir.

console.log(airline.slice(4)) // Air Portugal
console.log(airline.slice(4, 7)) // Air

console.log(airline.slice(0, airline.indexOf(" "))) // TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)) // Portugal

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1)
  if (s === "B" || s === "E") {
    console.log("Orta koltuk")
  }
}

checkMiddleSeat("11B") // Orta koltuk
checkMiddleSeat("23C") // Orta koltuk
checkMiddleSeat("3E") // Orta koltuk


// .toLowerCase() : Stringi küçük harfe çevirir.
// .toUpperCase() : Stringi büyük harfe çevirir.

console.log(airline.toLowerCase()) // tap air portugal
console.log(airline.toUpperCase()) // TAP AIR PORTUGAL


const passanger = "BeRkCaN"
const passangerLower = passanger.toLowerCase()
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1)
console.log(passangerCorrect) // Berkcan


// .trim() : Stringin başındaki ve sonundaki boşlukları siler.
const email = "hello@berkcan.io"
const loginEmail = "   Hello@Berkcan.Io \n"

const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
const normalizedEmail = trimmedEmail.toLowerCase().trim()
console.log(normalizedEmail) // hello@berkcan.io
console.log(email === normalizedEmail) // true


//.replace() : Stringin içindeki bir karakteri başka bir karakterle değiştirir. İlk parametre değiştirilecek karakter, ikinci parametre ise değiştirilecek karakter.
const priceGB = "288,97£"
const priceUS = priceGB.replace("£", "$").replace(",", ".")
console.log(priceUS) // 288.97$

const announcement = "Tüm yolcular biniş kapısı 23'e gelsin. Biniş kapısı 23!"
console.log(announcement.replace("kapısı", "gate")) // Tüm yolcular biniş gate 23'e gelsin. Biniş gate 23!

// .includes() : Bir stringin içinde aradığımız karakter var mı yok mu diye kontrol eder. Boolean değer döner.
const plane2 = "A320neo"
console.log(plane2.includes("A320")) // true
console.log(plane2.includes("Boeing")) // false

// .startsWith() : Bir stringin başlangıcında aradığımız karakter var mı yok mu diye kontrol eder. Boolean değer döner.
// .endsWith() : Bir stringin sonunda aradığımız karakter var mı yok mu diye kontrol eder. Boolean değer döner.

if(plane2.startsWith("A3") && plane2.endsWith("neo")) {
  console.log("Bu uçak Airbus 320neo")
}

const [firstName, lastName] = "Berkcan Gümüşışık".split(" ")
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")

console.log(newName) // Mr. Berkcan GÜMÜŞIŞIK

const capitalizeName = function(name) {
    const names = name.split(" ")
    const namesUpper = []
    
    for(const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1))
    }
    
    console.log(namesUpper.join(" "))
}

capitalizeName("jessica ann smith davis") // Jessica Ann Smith Davis
capitalizeName("berkcan gümüşışık") // Berkcan Gümüşışık

//.padStart() : Bir stringin başına istediğimiz karakteri ekler. İlk parametre stringin uzunluğu, ikinci parametre ise eklemek istediğimiz karakter.
const message2 = "Kapı 23'e gidin"
console.log(message2.padStart(25, "+").padEnd(35, "+")) // ++++++++++Kapı 23'e gidin++++++++++
console.log("Berkcan".padStart(25, "+").padEnd(35, "+")) // ++++++++++++++++++++Berkcan++++++++++++ 


document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n')

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_')

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
})

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
