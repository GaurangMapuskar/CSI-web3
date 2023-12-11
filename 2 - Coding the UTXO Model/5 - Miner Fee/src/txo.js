class TXO {
    // Create a constructor transaction with owner, amount and spent.
    constructor(owner,amount){
        this.owner=owner;
        this.amount =amount;
        this.spent =false;
    }
    spent(){
        this.spent=true;
    }
}

module.exports = TXO;