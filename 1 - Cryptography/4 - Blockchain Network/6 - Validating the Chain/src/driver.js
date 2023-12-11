const Block = require("./Block");
const Blockchain = require("./blockchain");

const myBlockChain = new Blockchain();

const block1 = new Block('Transaction 1');
myBlockChain.addBlock(block1);

const block2 = new Block('Transaction 2');
myBlockChain.addBlock(block2);

console.log("Blockchain:",myBlockChain);
console.log("Is Blockchain valid:",myBlockChain.isValid());