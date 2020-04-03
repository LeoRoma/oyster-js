class OysterCard {

  constructor() {
    this.maxBalance = 90;
    this.minBalance = 1
    this.balance = 0;
    this.inJourney = null;
  }

  topUp(amount) {
    this.balance += amount;
    if (this.balance > this.maxBalance) {
      throw new Error("Amount of £90 exceeded");
    }
  }

  deduct(amount = this.minBalance) {
    this.balance -= amount;
  }

  touchIn() {
    if (this.balance < this.minBalance) {
      throw new Error("Not enough money on oyster card");
    } else {
      this.inJourney = true;
    }
  }

  touchOut() {
    this.deduct();
    this.inJourney = null;
  }
}

module.exports = OysterCard;
