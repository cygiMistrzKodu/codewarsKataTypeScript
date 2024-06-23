"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gooseFilter = require('../src/solution').gooseFilter;
const chai_1 = require("chai");
describe("Basic tests", function () {
    it("Mixed list", function () {
        chai_1.assert.deepEqual(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
    it("No geese", function () {
        chai_1.assert.deepEqual(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });
    it("All geese", function () {
        chai_1.assert.deepEqual(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
    });
});
