import Popup from './Popup.js';

class PopupWithConfirmation extends Popup{
  constructor(selector, submit){
       super(selector);
       this._submit = submit;
       this._popupForm = this._popup.querySelector('.popup__form');
  }

  open(cardId, card){
    super.open();
    this._cardId = cardId;
    this._card = card;
  }

  _submitHandler = (evt) => {
    this._submit(evt, {cardId: this._cardId, card: this._card})
  }

  setEventListeners(){
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._submitHandler);
  }

}


export default PopupWithConfirmation;
