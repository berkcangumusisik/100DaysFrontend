console.log("Modül kullanıma açıldı.");

export const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} adet ${product} sepete eklendi.`);
};

// Farklı bir dokümda kullanılacaksa export etmeyi unutma.

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} adet ${product} sepete eklendi.`);
}

/**
 npm
  node package manager
  paket yöneticisi
  paketlerin yönetilmesi için kullanılır.
  npm init : Package.json dosyası oluşturur.
 */