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
      oystercard.touchIn("Oxford Street");
      expect(oystercard.inJourney).toBe(true);
    });

    test("check minimum balance", () => {
      expect(function() {
        oystercard.touchIn("Oxford Street");
      }).toThrow("Not enough money on oyster card");
    });
  });

  test("can touch out", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Oxford Street");
    oystercard.touchOut();
    expect(oystercard.inJourney).toBe(false);
  });

  test("can log an entry station", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Oxford Street");
    expect(oystercard.entryStation).toBe("Oxford Street");
  });

  test("can forget an entry station", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Oxford Street");
    oystercard.touchOut("Piccadilly");
    expect(oystercard.entryStation).toBe(undefined);
  });

  test("remember journey's stations", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Victoria");
    oystercard.touchOut("Piccadilly");
    expect(oystercard.journeys).toEqual(["Victoria", "Piccadilly"]);
  });
});
