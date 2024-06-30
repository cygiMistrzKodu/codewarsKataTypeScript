import { assert } from "chai";
import { pipeFix } from "../src/solution";

describe("Lario and Muigi Pipe Problem", () => {
  it("Fixed tests", () => {
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9],'You must return an array from 1-9');
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12],'You must return an array from 1-12');
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9],'You must return an array from 6-9');
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4],'You must return an array from -1-4');
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3],'You must return an array from 1-3');
    assert.deepEqual(pipeFix([2]),[2]);
  });
});
