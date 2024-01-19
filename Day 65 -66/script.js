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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) {
        return;
      }
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(
        (response) => response.json()
      );
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {console.log(err), renderError("Something went wrong")}).finally(() => {
      countriesContainer.style.opacity = 1
    }) ;
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
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
