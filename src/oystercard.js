class OysterCard {
  constructor() {
    this.maxBalance = 90;
    this.minBalance = 1;
    this.balance = 0;
    this.inJourney = false;
    this.entryStation = undefined;
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

  touchIn(entryStation) {
    if (this.balance < this.minBalance) {
      throw new Error("Not enough money on oyster card");
    } else {
      this.entryStation = entryStation;
      this.inJourney = true;
    }
  }

  touchOut() {
    this.deduct();
    this.inJourney = false;
    this.entryStation = undefined;
  }
}

module.exports = OysterCard;
