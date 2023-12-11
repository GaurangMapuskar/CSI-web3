class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.transaction = { inputUTXOs, outputUTXOs}
    }
    execute() {

        // Step 1: Check for the DoubleSpend.
        const isDoubleSpend =this.transaction.inputUTXOs.findIndex(utxo=>utxo.spent==true);
        if(isDoubleSpend!==-1)throw new Error("Transaction is already used");
        // Step 2: Calculate the Total Input and Output and if balance is avaliable.
        const oldInputUTXOs = [...this.transaction.inputUTXOs]
        const oldOutputUTXOs = [...this.transaction.outputUTXOs]

        const totalInputUTXOs =oldInputUTXOs.reduce((acc,cur)=>acc+cur,0);
        const totalOutputUTXOs =oldOutputUTXOs.reduce((acc,cur)=>acc+cur,0);

        if(totalInputUTXOs<totalOutputUTXOs)throw new Error("You dont have enough Funds");

        // Step 3: Change the spent of each input transaction used.
        const newInputUTXOs = oldInputUTXOs.map(inputUTXO=>inputUTXO.spent==true);
        this.transaction.inputUTXOs =newInputUTXOs;
        // Step 4: Calculate the fees.
        
    }
}

module.exports = Transaction;