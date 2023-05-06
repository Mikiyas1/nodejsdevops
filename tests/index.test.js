const expect = require("chai").expect;
const server = require("../src/index");

describe("test", () => {
  it("should return a string", () => {
    expect("Hello travis ci").to.equal("Hello travis ci");
  });
});
