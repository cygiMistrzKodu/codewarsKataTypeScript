export class PaginationHelper {

  private items: any[] = [];
  private itemsInSinglePage = 0;

  constructor(collection: any[], itemsPerPage: number) {
    this.items = collection;
    this.itemsInSinglePage = itemsPerPage;

  }
  itemCount(): number {
    return this.items.length;
  }
  pageCount(): number {

    return Math.ceil(this.itemCount() / this.itemsInSinglePage);
  }
  pageItemCount(pageIndex: number): number {


    if (pageIndex < 0) {
      return -1;
    }

    const firstElementIndexOnPage = pageIndex * this.itemsInSinglePage
    const elementLeftOnPage = this.itemCount() - firstElementIndexOnPage;


    if (elementLeftOnPage >= this.itemsInSinglePage) {
      return this.itemsInSinglePage;
    }

    if (elementLeftOnPage > 0 && elementLeftOnPage < this.itemsInSinglePage) {

      return this.items.slice(firstElementIndexOnPage, this.itemCount()).length

    }

    return -1
  }
  pageIndex(itemIndex: number) {

    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsInSinglePage)
  }
}