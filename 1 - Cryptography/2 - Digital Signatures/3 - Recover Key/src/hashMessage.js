const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    // Write function to hash a data string
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    return hash;
}

module.exports = hashMessage;