//create an object called bankAccount with properties like accountNumber, balance and 
//holdername. Write a function to deposit and withdraw money from the account
var bankAccount = {
    accountNumber : 101,
    balance : 5000,
    holderName : "Abhinav",
    deposite : function(amt){
        this.balance+=amt;
        return this.balance;
        
    },
    withdraw : function(amt){
        this.balance-=amt;
        
        return this.balance;
    }
}
console.log("Original balance = " + bankAccount.balance)
console.log("After depositing = " +bankAccount.deposite(2000))
console.log("After withdrawing = "+bankAccount.withdraw(6000))
//