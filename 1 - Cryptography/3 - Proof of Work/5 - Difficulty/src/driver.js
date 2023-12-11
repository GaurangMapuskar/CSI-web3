const {addTransaction,mine,blocks,mempool}=require("./index.js");

const transaction1 = {sender:'Gaurang',receiver:'Harsh',amount:5};
const transaction2 = {sender:'CSI',receiver:'AI Colegion',amount:3};

addTransaction(transaction1);
addTransaction(transaction2);

mine();

console.log("Mempool",mempool);
console.log("Blocks",blocks);