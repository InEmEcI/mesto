import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(selector) {
    super(selector);

    this._popupForm = this._popup.querySelector('.popup__form');
  }


  submitConfirmation(callback) {
    this._confirm = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._confirm();
    });

  }

}

export default PopupWithConfirmation;
