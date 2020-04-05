class OysterCard {
  constructor(station = new Station, journey = new Journey) {
    this.maxBalance = 90;
    this.minBalance = 1;
    this.balance = 0;
    this.inJourney = false;
    this.station = station;
    // this.station = station;
    this.journey = journey
  };

  // hello(){
  //   console.log(this.station, "station", this.journey, 'journey')
  // }
  topUp(amount) {
    this.balance += amount;
    if (this.balance > this.maxBalance) {
      throw new Error("Amount of £90 exceeded");
    }
  };

  deduct(amount = this.minBalance) {
    this.balance -= amount;
  };

  touchIn(entryStation) {
    if (this.balance < this.minBalance) {
      throw new Error("Not enough money on oyster card");
    } else {
      this.station = entryStation;
      console.log(this.station.name)
      this.inJourney = true;
    }
    this.journey.addCurrentJourney(entryStation)
  };

  touchOut(exitStation) {
    this.deduct();
    this.inJourney = false;
    this.station = exitStation;
    this.journey.addCurrentJourney(exitStation)
    this.journey.addJourney()
  };

};

module.exports = OysterCard;
