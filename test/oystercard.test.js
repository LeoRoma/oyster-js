const OysterCard = require("../src/oystercard.js");
// const Station = require("../src/station.js");
const Journey = require("../src/journey.js");

describe("OysterCard", () => {
  let oystercard;
  let victoria;
  let journey;

  beforeEach(() => {
    journey = new Journey();
    victoria = { name: "Victoria", zone: 1 };
    piccadilly = { name: "Piccadilly", zone: 1 };
    oystercard = new OysterCard(piccadilly, journey);
  });

  test("has a balance", () => {
    expect(oystercard.balance).toEqual(0);
  });

  describe("can top up", () => {
    test("card", () => {
      oystercard.topUp(10);
      expect(oystercard.balance).toEqual(10);
    });

    test("has a max balance of 90", () => {
      expect(function() {
        oystercard.topUp(100);
      }).toThrow("Amount of £90 exceeded");
    });
  });

  describe("deduct", () => {
    test("deduct some amount", () => {
      oystercard.topUp(10);
      oystercard.deduct();
      expect(oystercard.balance).toEqual(9);
    });
  });

  describe("touch in", () => {
    test("in journey?", () => {
      oystercard.topUp(10);
      oystercard.touchIn(victoria);
      expect(oystercard.inJourney).toBe(true);
    });

    test("check minimum balance", () => {
      expect(function() {
        oystercard.touchIn(victoria);
      }).toThrow("Not enough money on oyster card");
    });
  });

  test("can touch out", () => {
    oystercard.topUp(10);
    oystercard.touchIn(victoria);
    oystercard.touchOut(piccadilly);
    expect(oystercard.inJourney).toBe(false);
  });

  test("charge a penalty fare when touching in twice", () => {
    oystercard.topUp(10);
    oystercard.touchIn(victoria);
    oystercard.touchIn(piccadilly);
    expect(oystercard.balance).toEqual(4);
  });

  test("charge a penalty fare when no touching in", () => {
    oystercard.topUp(10);
    oystercard.touchOut(victoria);
    expect(oystercard.balance).toEqual(4);
  });
});
