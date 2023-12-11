// Import the getBlockNumber function
const getBalance = require('./src/getBlockNumber');

// Driver code to call the getBlockNumber function
async function main() {
    try {
        // Call the getBlockNumber function
        const getmyBalance = await getBalance("0xda9dfa130df4de4673b89022ee50ff26f6ea73cf");

        // Log the result
        console.log('Balance of Current Block :', getmyBalance);
    } catch (error) {
        console.error('Error fetching block number:', error.message);
    }
}

// Execute the driver code
main();
