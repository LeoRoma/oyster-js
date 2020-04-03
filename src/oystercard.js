class OysterCard {
  constructor() {
    this.maxBalance = 90;
    this.balance = 0;
  }

  topUp(amount) {
    if (amount < this.maxBalance) {
      this.balance += amount;
    } else {
      throw new Error("Amount of £90 exceeded");
    }
  }
}

module.exports = OysterCard;
