const Journey = require('../src/journey.js');
// const Station = require("../src/station.js");

describe('Journey', () => {
  let journey;
  let victoria;

  beforeEach(() => {
    journey = new Journey;
    victoria = { name: 'Victoria', zone: 1 };
  });

  test("has empty journey list", () => {
    expect(journey.log).toEqual([]);
  });

  test('add entry station to current journey', () => {
    journey.addCurrentJourney(victoria)
    expect(journey.currentJourney[0]).toEqual(victoria)
  });

  xtest('add also an exit station to current journey', () => {
    expect(oystercard.currentJourney[0]).toEqual({ name: 'Victoria', zone: 1 }, { name: 'Piccadilly', zone: 1 })
  });

  xtest("remember journey's stations", () => {
    oystercard.topUp(10);
    oystercard.touchIn(victoria);
    oystercard.touchOut(piccadilly);
    // oystercard.addJourney("Victoria", "Piccadilly")
    expect(oystercard.journey).toEqual([{ entryStation: { name: 'Victoria', zone: 1 }, exitStation: { name: 'Piccadilly', zone: 1 } }]);
  });
});