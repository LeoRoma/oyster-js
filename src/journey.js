class Journey {
  constructor() {
    this.log = [];
    this.currentJourney = [];
  }

  addCurrentJourney(station) {
    this.currentJourney.push(station);
  }

  addToLog() {
    this.log.push({
      entryStation: this.currentJourney[0],
      exitStation: this.currentJourney[1]
    });
    this.currentJourney = [];
  }
}

module.exports = Journey;
