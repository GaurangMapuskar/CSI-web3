const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction)
}

function mine() {
    // Step 1: Create a block with Block Id ,nonce.
    const blockSize = blocks.length;
    const newblock = {
        id:blockSize,
        nonce:0
    }
    // Step 2: Add all the transaction from mempool to Block.transaction.Also check for difficulty.
    const oldMempool = [...mempool];
    const transaction = oldMempool.filter((tx,index)=>{
        if(index<MAX_TRANSACTIONS){
            mempool.shift();
            return tx;
        }
    })

    newblock.transaction = transaction;
    // Step 3: Mine the block and solve the difficuty to find right nonce.
    while(BigInt(`0x${SHA256(JSON.stringify(newblock))}`)>TARGET_DIFFICULTY){
        newblock.nonce+=1;
    }
    // Step 4: Hash the block with tx and store in blocks array.
    const blockHash = SHA256(JSON.stringify(newblock));
    newblock.hash = blockHash

    blocks.push(newblock);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};