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
    this.handleTouchIn(entryStation);
    this.journey.addCurrentJourney(entryStation);
  }

  touchOut(exitStation) {
    console.log(this.inJourney, "before if");
    if (this.inJourney === false) {
      console.log(this.inJourney, "after if");
      this.handlePenaltyFare();
    } else {
      this.deduct();
      this.inJourney = false;
      this.station = exitStation;
      this.journey.addCurrentJourney(exitStation);
      this.journey.addToLog();
    }
  }

  handleTouchIn(entryStation) {
    if (this.balance < this.fare) {
      throw new Error("Not enough money on oyster card");
    } else {
      this.station = entryStation;
      this.inJourney = true;
    }
  }

  handlePenaltyFare() {
    this.balance -= this.penaltyFare;
    this.inJourney = false;
  }
}

module.exports = OysterCard;
