let order = {
  customer: "Fatima",
  items: [
    { product: "Bag", unitPrice: 15000, qty: 2 },
    { product: "Shoes", unitPrice: 22000, qty: 1 },
    { product: "Belt", unitPrice: 5000, qty: 3 }
  ]
};
console.log(order.customer)
let total = 0;
for(i=0;i<order.items.length; i++){
  total += order.items[i].unitPrice * order.items[i].qty;
}
console.log(order.customer + "total order cost is:#"+ total)