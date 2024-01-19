const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = " ") {
  const html = `
  <article class="country ${className}">
  <article class="country ">
    <img class="country__img" src="${data.flags["svg"]}" />
    <div class="country__data">
      <h3 class="country__name">${data.name["common"]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row">
        <span>🗣️</span>
        <span>
        
          ${Object.values(data.languages).slice(0, 2).join(", ")}
        </span>
      </p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0]["name"]
      }</p>
    </div>
  </article>
</article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest(); // XMLHttpRequest : istekte bulunmayı sağlar.
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     const neighbour = data.borders?.[0];
//     if (!neighbour) {
//       return;
//     }

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("usa");

// setTimeout(() => {
//   console.log("1 sn sonra");
//   setTimeout(() => {
//     console.log("2 sn sonra");
//     setTimeout(() => {
//       console.log("3 sn sonra");
//       setTimeout(() => {
//         console.log("4 sn sonra");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found!");
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("turkey");
});
/**
 * Senkron
 - Çoğu zaman eş zamanlıdır.
 - Satır satır yürütülür.
 - Her kod satırı bir öncekinin bitmesini bekler.
 - Uzun süren işlemler kodun yürütülmesini engeller.(olumsuz durum)
 
 * Asenkron
 - Arka planda çalışan bir görev tamamlanınca yürütülür.
 - Eş zamansız kod engellenmez.
 - Yürütme, eş zamansız bir görevin tamamlanmasını beklemez.
 - Callback her zaman tek başına eş zamansız yapmaz.


 AJAX (Asenkron Javascript ve XML)
 - Sayfa yenilenmeden uzak sunucu ile iletişim kurar.
 - AJAX ile web sunucularından dinamik veri akışı sağlanabilir.

 API(Application Programming Interface - Uygulama Programlama Arayüzü)
 - Uygulamaların birbiriyle konuşmasıı sağlayan başka bir yazılım tarafından kullanılabilen kod parçası
 - Örnek olarak DOM ve Geolocation verilebilir.

Promise:
  - Asenkron işlemler için kullanılır.
  - Gelecekteki değer için bir alandır.

fetch()
  - Promise tabanlıdır.
  - Veri alışverişi için kullanılır.
  - Response objesi döndürür.
  - Response objesinin body özelliği ReadableStream özelliğine sahiptir.
  - Response objesinin body özelliği json() metodu ile okunabilir.
  - Response objesinin body özelliği text() metodu ile okunabilir.
  - Response objesinin body özelliği blob() metodu ile okunabilir.
  
catch: 
  - Hata yakalamak için kullanılır.

finally:
  - Her durumda çalışır.

 */

//Coding Challenge 1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

console.log("Test Started");
setTimeout(() => {
  console.log("0 sec timer");
}, 0);
Promise.resolve("Resolved promise 1").then((res) => {
  console.log(res);
});
console.log("Test end ");
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You win");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res));

const wait4 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second"));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then((pos) => console.log(pos));

const whereAmI2 = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

btn.addEventListener("click", whereAmI);
const wait2 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));

const getPosition4 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

///////////////////////////////////////
// Returning Values from Async Functions
const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI4 = async function () {
  try {
    // Geolocation
    const pos = await getPosition2();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    throw err;
  }
};

console.log("1: Will get location");
const city = whereAmI4();
console.log(city);

whereAmI()
  .then((city) => console.log(`2: ${city}`))
  .catch((err) => console.error(`2: ${err.message} 💥`))
  .finally(() => console.log("3: Finished getting location"));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log("3: Finished getting location");
})();

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries("portugal", "canada", "tanzania");

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });

  const imgContainer = document.querySelector(".images");

  const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
      const img = document.createElement("img");
      img.src = imgPath;

      img.addEventListener("load", function () {
        imgContainer.append(img);
        resolve(img);
      });

      img.addEventListener("error", function () {
        reject(new Error("Image not found"));
      });
    });
  };

  let currentImg;

  createImage("img/img-1.jpg")
    .then((img) => {
      currentImg = img;
      console.log("Image 1 loaded");
      return wait(2);
    })
    .then(() => {
      currentImg.style.display = "none";
      return createImage("img/img-2.jpg");
    })
    .then((img) => {
      currentImg = img;
      console.log("Image 2 loaded");
      return wait(2);
    })
    .then(() => {
      currentImg.style.display = "none";
    })
    .catch((err) => console.error(err));

  const loadNPause = async function () {
    try {
      // Load image 1
      let img = await createImage("img/img-1.jpg");
      console.log("Image 1 loaded");
      await wait(2);
      img.style.display = "none";

      // Load image 1
      img = await createImage("img/img-2.jpg");
      console.log("Image 2 loaded");
      await wait(2);
      img.style.display = "none";
    } catch (err) {
      console.error(err);
    }
  };
  loadNPause();

  const loadAll = async function (imgArr) {
    try {
      const imgs = imgArr.map(async (img) => await createImage(img));
      const imgsEl = await Promise.all(imgs);
      console.log(imgsEl);
      imgsEl.forEach((img) => img.classList.add("parallel"));
    } catch (err) {
      console.error(err);
    }
  };
  loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
};
