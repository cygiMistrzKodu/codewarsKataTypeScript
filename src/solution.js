"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationHelper = void 0;
class PaginationHelper {
    items = [];
    itemsInSinglePage = 0;
    constructor(collection, itemsPerPage) {
        this.items = collection;
        this.itemsInSinglePage = itemsPerPage;
    }
    itemCount() {
        return this.items.length;
    }
    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsInSinglePage);
    }
    pageItemCount(pageIndex) {
        if (pageIndex < 0) {
            return -1;
        }
        const firstElementIndexOnPage = pageIndex * this.itemsInSinglePage;
        const elementLeftOnPage = this.itemCount() - firstElementIndexOnPage;
        if (elementLeftOnPage >= this.itemsInSinglePage) {
            return this.itemsInSinglePage;
        }
        if (elementLeftOnPage > 0 && elementLeftOnPage < this.itemsInSinglePage) {
            return this.items.slice(firstElementIndexOnPage, this.itemCount()).length;
        }
        return -1;
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsInSinglePage);
    }
}
exports.PaginationHelper = PaginationHelper;
