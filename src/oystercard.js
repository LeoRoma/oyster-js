class OysterCard {
  constructor() {
    this.maxBalance = 90;
    this.balance = 0;
  }

  topUp(amount) {
    this.balance += amount;
    if (this.balance > this.maxBalance) {
      throw new Error("Amount of £90 exceeded");
    }
  }
}

module.exports = OysterCard;
