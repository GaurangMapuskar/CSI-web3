const hashMessage = require("./hashMessage");
const secp = require("ethereum-cryptography/secp256k1");

async function recoverKey(message, signature, recoveryBit) {
    // Write a function to get Public key
    const publicKey = await secp.recoverPublicKey(hashMessage(msg),signature,recoveryBit);
    return publicKey;
}

module.exports = recoverKey;