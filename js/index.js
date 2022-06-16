
// Javascript object
// Jason
const user = { id: 11, name: 'Gorib salman', job: 'actor' };
// console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    name: 'Alia Bhat',
    address: ' Ranbir Road',
    profit: 1500,
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);



