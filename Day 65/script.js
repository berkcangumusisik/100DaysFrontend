const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest(); // XMLHttpRequest : istekte bulunmayı sağlar.
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
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
  });
};

getCountryData("turkey");
getCountryData("usa");

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

 */
