// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { pigIt } from "../src/solution";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
    assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
    assert.strictEqual(pigIt('Hello world !'),'elloHay orldway !')
    assert.strictEqual(pigIt('ifNLjP  pw nyBJDdBueCngAemQYg eYOwNeUWFLaYGnNlYh ? nLghKL vRqmowQDZYhalGw'),'fNLjPiay  wpay yBJDdBueCngAemQYgnay YOwNeUWFLaYGnNlYheay ? LghKLnay RqmowQDZYhalGwvay')
});
});
