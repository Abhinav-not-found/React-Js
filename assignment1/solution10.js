//create an object called bankAccount with properties like accountNumber, balance and 
//holdername. Write a function to deposit and withdraw money from the account
var bankAccount = {
    accountNumber : 101,
    balance : 5000,
    holderName : "Abhinav",
    deposite : function(){
        this.balance+=2000;
        return this.balance;
        
    },
    withdraw : function(){
        this.balance-=4000;
        
        return this.balance;
    }
}
console.log("Original balance = " + bankAccount.balance)
console.log("After depositing 2000 = " +bankAccount.deposite())
console.log("After withdrawing 4000 = "+bankAccount.withdraw())
