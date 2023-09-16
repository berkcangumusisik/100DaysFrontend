/** 
 * DOM (Document Object Model) - Doküman Nesne Modeli
 * HTML sayfasındaki tüm elementlere erişmemizi sağlayan bir yapıdır.
 * Ağaç yapısı gibi düşünebiliriz.
 * DOM ile bir elemente erişmek için önce o elementin parent'ına ulaşmamız gerekir.
 * document.querySelector('.className') -> class ismi ile elemente ulaşmayı sağlar.
 * document.querySelector('#idName') -> id ismi ile elemente ulaşmayı sağlar.
 * document.querySelector('tagName') -> tag ismi ile elemente ulaşmayı sağlar.
 * .textContent -> Elementin içeriğini değiştirmemizi sağlar.
 * .addEventListener -> Elemente event eklememizi sağlar. Fonksiyon yardımıyla event ekleriz.
 * .style -> Elementin stilini değiştirmemizi sağlar. Örnek: document.querySelector('.className').style.backgroundColor = 'red'

 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ Lütfen bir sayı giriniz');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Sayıyı Doğru Bildiniz');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {

      displayMessage(guess > secretNumber ? '📈 Çok yüksek' : '📉 Çok düşük');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Oyunu Kaybettiniz');
      document.querySelector('.score').textContent = 0;
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Oyun yeniden başlıyor.');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});