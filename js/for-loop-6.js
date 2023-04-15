const goods = 5;
const min = 500;
const max = 5000;
let randomPrice = 0;
let totalPrice = 0;

for (let i = 1; i <= goods; i += 1) {
  randomPrice = Math.round(Math.random() * (max - min) + min);
  console.log(`Ціна ${i} товару ${randomPrice}`);
  totalPrice += randomPrice;
  if (i === goods) {
    console.log(`Загальна сума ${totalPrice}`);
  };
};