const Block = require('./block');

class Blockchain {
    constructor() {
        const block = new Block("Genesis");
        this.chain =[block];
    }
    // Step 1: Create a constructor for Genesis.
    // Step 2: Create addBlock function with previous hash.
    addBlock(block) {
        const oldChain =[...this.chain];
        const lastBlock = oldChain.pop();

        block.previousHash = lastBlock.toHash();
        this.chain=[...this.chain,block]
    }
}

module.exports = Blockchain;