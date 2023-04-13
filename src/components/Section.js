class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._containerSelector.prepend(item);
  }

  renderItems(items) {
    this._items = items;
    this._items.reverse().forEach((item) => {
      this._renderer(item)
    });
  }

}

export default Section;
