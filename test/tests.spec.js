"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("Tests suite", () => {
    it("sample test : 24 items with 10 per page", () => {
        const collection = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 23, 24,
        ];
        const helper = new solution_1.PaginationHelper(collection, 10);
        chai_1.assert.strictEqual(helper.pageCount(), 3, "pageCount()");
        chai_1.assert.strictEqual(helper.itemCount(), 24, "itemCount()");
        chai_1.assert.strictEqual(helper.pageItemCount(1), 10, "pageItemCount(1)");
        chai_1.assert.strictEqual(helper.pageItemCount(2), 4, "pageItemCount(2)");
        chai_1.assert.strictEqual(helper.pageItemCount(3), -1, "pageItemCount(3)");
        chai_1.assert.strictEqual(helper.pageItemCount(-2), -1, "pageItemCount(-2)");
        chai_1.assert.strictEqual(helper.pageIndex(40), -1, "pageIndex(40)");
        chai_1.assert.strictEqual(helper.pageIndex(22), 2, "pageIndex(22)");
        chai_1.assert.strictEqual(helper.pageIndex(3), 0, "pageIndex(3)");
        chai_1.assert.strictEqual(helper.pageIndex(0), 0, "pageIndex(0)");
        chai_1.assert.strictEqual(helper.pageIndex(-1), -1, "pageIndex(-1)");
        chai_1.assert.strictEqual(helper.pageIndex(-23), -1, "pageIndex(-23)");
        chai_1.assert.strictEqual(helper.pageIndex(-15), -1, "pageIndex(-15)");
    });
    it("empty collection", () => {
        const helper = new solution_1.PaginationHelper([], 10);
        chai_1.assert.strictEqual(helper.pageCount(), 0, "pagecount()");
        chai_1.assert.strictEqual(helper.itemCount(), 0, "itemCount()");
        chai_1.assert.strictEqual(helper.pageIndex(0), -1, "pageIndex(0)");
        chai_1.assert.strictEqual(helper.pageItemCount(0), -1, "pageItemCount(0)");
    });
});
