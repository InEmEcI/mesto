import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(selector, submit) {
    super(selector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInputs = this._popupForm.querySelectorAll('.popup__input');
    this._submit = submit;
    this._buttonText = submit.textContent;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setInputValues(data) {
    this._popupInputs.forEach(
      (item) => { item.value = data[item.name] }
    )
  }

  _getInputValues() {
    const inputData = {};
    this._popupInputs.forEach((item) => {
      inputData[item.name] = item.value;
    });

    return inputData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
    });
  }

}

export default PopupWithForm;
