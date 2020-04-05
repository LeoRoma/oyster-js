const Station = require("../src/station");

describe("Station", () => {
  let station;

  beforeEach(() => {
    station = new Station("Victoria", 1);
  });

  test("station has a zone", () => {
    expect(station.zone).toBe(1);
  });

  test("station has a name", () => {
    expect(station.name).toBe("Victoria");
  });
});
