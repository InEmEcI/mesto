class Section {
  constructor({ renderer }, containerSelector) {
    // this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._containerSelector.prepend(item);
  }

  renderItems(items) {
    this._items = items;
    this._items.forEach((item) => {
      this._renderer(item)
    });
  }

  // addItem(item, isInversed = false) {
  //   if (isInversed) {
  //     this._containerSelector.prepend(item);
  //   } else {
  //     this._containerSelector.append(item);
  //   }
  // }

  // renderItems(cards) {
  //   cards.forEach((item) => {
  //     const element = this._renderer(item);
  //     this.addItem(element);
  //   })
  // }


}

export default Section;
