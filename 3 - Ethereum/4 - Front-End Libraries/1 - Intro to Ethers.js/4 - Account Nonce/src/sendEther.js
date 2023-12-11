const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

// TODO: replace undefined with a new web3 provider
const provider = new providers.Web3Provider(ganacheProvider);; 

const wallet = new Wallet(PRIVATE_KEY, provider);

async function sendEther({ value, to }) {
    // send a transaction using sendtransaction function and calculate nonce.
    const nonce = wallet.getTransactionCount('pending');
    const transaction = await wallet.sendTransaction({
        value,
        to,
        gasLimit:21000,
        gasPrice:0x3b9aca00,
        nonce
    });
    // Find the balance of the Account.
    return transaction;
}

module.exports = sendEther;