class Bank {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    // Guard Clause
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(` Amount Withdrawn : ${amount}`);
      console.log(` The Updated Balance : ${this.balance}`);
    } else {
      console.log(" Insufficient Amount ");
      console.log({ " Balance Amount ": this.balance });
    }
  }

  deposit(amount) {
    this.balance += amount;
    console.log(` Amount Deposited : ${amount}`);
    console.log(` The Updated Balance : ${this.balance}`);
  }
}

const adarsh = new Bank(100);
adarsh.withdraw(100);
// adarsh.deposit(100);
// adarsh.deposit(100);
adarsh.withdraw(100);
