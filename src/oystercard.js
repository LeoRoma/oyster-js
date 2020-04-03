class OysterCard {
  constructor() {
    this.maxBalance = 90;
    this.balance = 0;
    this.fare = 3;
    this.inJourney = null;
  }

  topUp(amount) {
    this.balance += amount;
    if (this.balance > this.maxBalance) {
      throw new Error("Amount of £90 exceeded");
    }
  }

  deduct() {
    if (this.balance < this.fare) {
      throw new Error("Not enough money on oyster card");
    } else {
      this.balance -= this.fare;
    }
  }

  touchIn() {
    this.inJourney = true;
  }

  touchOut() {
    this.inJourney = null;
  }
}

module.exports = OysterCard;
