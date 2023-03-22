class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._containerSelector.prepend(item);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item) });
  }

}

export default Section;
