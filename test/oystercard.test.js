const OysterCard = require("../src/oystercard.js");

describe("OysterCard", () => {
  let oystercard;

  beforeEach(() => {
    oystercard = new OysterCard();
  });

  test("hello world", () => {
    expect(oystercard.hello("Hello world")).toEqual("Hello world");
  });
  test("has a balance", () => {
    expect(oystercard.balance).toEqual(0);
  });
});
