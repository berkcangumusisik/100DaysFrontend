const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
let map, mapEvent;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords; // enlem
      const { longitude } = position.coords; // boylam
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
      const coords = [latitude, longitude];
      const map = L.map("map").setView(coords, 20); // coords : koordinatı ifade eder, 20 ise bize yakınlık derecesini veriri Daha yakın seçilirse konum o kadar yakın gözükür.
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on("click", function (mapE) {
        mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
      });
    },

    function () {
      alert("Konum alınamadı");
    }
  );
}
form.addEventListener("submit", function () {
  e.preventDefault();
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ""
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 200,
        minWidth: 100,
        autoClose: false,
        closeButton: false,
        className: "running-popup",
      })
    )
    .setPopupContent("Burası")
    .openPopup();
});

inputType.addEventListener("change",function(){
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
})
//<script> etiketinin defer özelliği, bir JavaScript dosyasının tarayıcı tarafından indirilirken ve yürütülürken beklemesini sağlayan bir özelliktir.
