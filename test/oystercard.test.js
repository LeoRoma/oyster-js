const OysterCard = require("../src/oystercard.js");
// const Station = require("../src/station.js");
const Journey = require('../src/journey.js');

describe("OysterCard", () => {
  let oystercard;
  let victoria;
  let journey;

  beforeEach(() => {
    journey = new Journey
    victoria = { name: 'Victoria', zone: 1 };
    piccadilly = { name: 'Piccadilly', zone: 1 };
    oystercard = new OysterCard(piccadilly, journey);
  });

  // test("journey class", () => {
  //   console.log(journey)
  //   expect(oystercard.hello(5)).toEq(5)
  // })

  test("has a balance", () => {
    console.log(oystercard)
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
      oystercard.topUp(10);
      oystercard.touchIn(victoria);
      expect(oystercard.inJourney).toBe(true);
    });

    test("check minimum balance", () => {
      expect(function () {
        oystercard.touchIn(victoria);

      }).toThrow("Not enough money on oyster card");
    });
  });

  test("can touch out", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Oxford Street");
    oystercard.touchOut();
    expect(oystercard.inJourney).toBe(false);
  });

  test("can touch out", () => {
    oystercard.topUp(10);
    oystercard.touchIn(victoria);
    oystercard.touchOut(piccadilly);
    expect(oystercard.station).toEqual({ name: 'Piccadilly', zone: 1 });
  });

  test("can log an entry station", () => {
    oystercard.topUp(10);
    oystercard.touchIn(victoria);
    expect(oystercard.station).toEqual({ name: 'Victoria', zone: 1 });
  });



  xtest("can forget an entry station", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Oxford Street");
    oystercard.touchOut("Piccadilly");
    expect(oystercard.entryStation).toBe("Oxford Street");
  });

  xtest("can add multiple journeys", () => {
    oystercard.topUp(10);
    oystercard.touchIn("Victoria");
    oystercard.touchOut("Piccadilly");
    oystercard.touchIn("Aldgate");
    oystercard.touchOut("Kilburn");
    expect(oystercard.journeys).toEqual([{ entryStation: "Victoria", exitStation: "Piccadilly" }, { entryStation: "Aldgate", exitStation: "Kilburn" }]);
  })
});
