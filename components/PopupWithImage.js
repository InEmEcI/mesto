import Popup from './Popup.js';

class PopupWithImage extends Popup{
  constructor(selector){
    super(selector);
    this._title = this._popup.querySelector('.popup-card-image__figcaption');
    this._image = this._popup.querySelector('.popup-card-image__photo');
  }

  open({name, link}){
    this._title.textContent = name;
    this._image.alt = name;
    this._image.src = link;
    super.open();
  }

}

export default PopupWithImage;
