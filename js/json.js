const user = { id: 1, name: "Jerin Islam", job: "learner" };
// JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/*
{ id: 1, name: 'Jerin Islam', job: 'learner' }
{"id":1,"name":"Jerin Islam","job":"learner"}
*/
const shop = {
  owner: "Jerin Islam",
  adress: {
    street: "london",
    city: "London",
    country: "United Kingdom",
  },
  products: ["laptop", "tablet", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
