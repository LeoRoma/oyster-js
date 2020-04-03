const OysterCard = require("../src/oystercard.js");

describe("OysterCard", () => {
  let oystercard;

  beforeEach(() => {
    oystercard = new OysterCard();
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
      expect(function () {
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
      oystercard.topUp(10)
      oystercard.touchIn();
      expect(oystercard.inJourney).toBe(true);
    });

    test("check minimum balance", () => {
      expect(function () {
        oystercard.touchIn();
      }).toThrow("Not enough money on oyster card");
    });
  });

  test("can touch out", () => {
    oystercard.topUp(10)
    oystercard.touchIn();
    oystercard.touchOut();
    expect(oystercard.inJourney).toBe(null);
  });
});
