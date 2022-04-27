const searchCandies = require("./candies");

describe("search for candies", () => {
  it("retrun the candies with the asked prefix", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("return Mars when price is under 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("return 3 products when S is selected and price is under 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("return 2 products when S is selected and price is under 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
  it("return 2 products when ma is selected and price is under 10", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});
