import { remove } from "../src/solution";
import { assert } from "chai";

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){
    assert.strictEqual(remove("Hi!") , "Hi");
    assert.strictEqual(remove("Hi!!!") ,"Hi!!");
    assert.strictEqual(remove("!Hi") , "!Hi");
    assert.strictEqual(remove("!Hi!") , "!Hi");
    assert.strictEqual(remove("Hi! Hi!") , "Hi! Hi");
    assert.strictEqual(remove("Hi") , "Hi");
  });
});