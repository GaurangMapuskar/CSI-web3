const axios = require('axios');

// grab the API key from the .env
require('dotenv').config();
const url = `https://eth-mainnet.g.alchemy.com/v2/-W9PjZ9iMoEP9bGRWqqLBVqPjom9D89H`;
    // Create a Alceamy account and get the API key and URL.
async function getBalance(address) {
    
    // Create a data and post the request for JSON-RPC.
    const {data}= await axios.post(url,{
        jsonrpc:"2.0",
        id:1,
        method:"eth_getBalance",
        params:[address]
    });
    const getBalance = data.result;
    return getBalance
    // eth_blockNumber,  eth_getBalance,  eth_getTransactionCount,  eth_getBlockTransactionCountByNumber
    
}

module.exports = getBalance;