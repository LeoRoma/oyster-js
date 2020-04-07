class OysterCard {
  constructor(station = new Station(), journey = new Journey()) {
    this.maxBalance = 90;
    this.fare = 1;
    this.penaltyFare = 6;
    this.balance = 0;
    this.inJourney = false;
    this.station = station;
    this.journey = journey;
  }

  topUp(amount) {
    this.balance += amount;
    if (this.balance > this.maxBalance) {
      throw new Error("Amount of £90 exceeded");
    }
  }

  deduct(amount = this.fare) {
    this.balance -= amount;
  }

  touchIn(entryStation) {
    if (!this.inJourney) {
      this.handlePenaltyFare();
    }
    if (this.balance < this.fare) {
      throw new Error("Not enough money on oyster card");
    } else {
      this.station = entryStation;
      this.inJourney = true;
    }
    this.journey.addCurrentJourney(entryStation);
  }

  touchOut(exitStation) {
    this.deduct();
    this.inJourney = false;
    this.station = exitStation;
    this.journey.addCurrentJourney(exitStation);
    this.journey.addToLog();
  }

  handlePenaltyFare() {
    this.balance -= this.penaltyFare;
  }
}

module.exports = OysterCard;
