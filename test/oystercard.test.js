const OysterCard = require("../src/oystercard.js");

describe("OysterCard", () => {
  let oystercard;

  beforeEach(() => {
    oystercard = new OysterCard();
  });

  test("has a balance", () => {
    expect(oystercard.balance).toEqual(0);
  });

  test("top up card", () => {
    oystercard.topUp(10)
    expect(oystercard.balance).toEqual(10)
  });
});
