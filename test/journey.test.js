const Journey = require("../src/journey.js");
// const Station = require("../src/station.js");

describe("Journey", () => {
  let journey;
  let victoria;

  beforeEach(() => {
    journey = new Journey();
    victoria = { name: "Victoria", zone: 1 };
    piccadilly = { name: "Piccadilly", zone: 1 };
  });

  test("has empty journey list", () => {
    expect(journey.log).toEqual([]);
  });

  test("add entry station to current journey", () => {
    journey.addCurrentJourney(victoria);
    expect(journey.currentJourney[0]).toEqual(victoria);
  });

  test("add also an exit station to current journey", () => {
    journey.addCurrentJourney(victoria);
    journey.addCurrentJourney(piccadilly);
    expect(journey.currentJourney).toEqual([victoria, piccadilly]);
  });
  test("add also an exit station to current journey", () => {
    journey.addCurrentJourney(victoria);
    journey.addCurrentJourney(piccadilly);
    journey.addToLog();
    journey.addCurrentJourney(victoria);
    journey.addCurrentJourney(piccadilly);
    journey.addToLog();
    expect(journey.log).toEqual([
      { entryStation: victoria, exitStation: piccadilly },
      { entryStation: victoria, exitStation: piccadilly }
    ]);
  });
});
