import {distinct} from "../src/solution";
// import the type of assertion library you wish to use (Chai recommended)
import {expect} from "chai";

// TODO: Replace examples and use TDD development by writing your own tests

describe("solution", function(){
  it("should handle array with one number", () => {
    expect(distinct([1])).to.eql([1])
  });
  it("should handle array with two numbers but no duplicates", () => {
    expect(distinct([1,2])).to.eql([1,2])
  });
  it("should handle array with two numbers and a duplicate", () => {
    expect(distinct([1,1,2])).to.eql([1,2])
  });
});