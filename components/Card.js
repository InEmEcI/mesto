class Card {
  constructor(data, templateSelector, clickToImage) {
    this._templateSelector = templateSelector;
    this._link = data.link;
    this._name = data.name;
    this._clickToImage = clickToImage;
    this._data = data;
  }

  // здесь выполним все необходимые операции, чтобы вернуть разметку
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    // Добавим данные
    this._imageCard = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;

    this._setEventListeners();

    // Вернём элемент наружу
    return this._element;
  }

  _deleteCard(){
    this._element.remove();
  }

  _handleImageClick(){
    // this._zoomImage(this._data);
    this._clickToImage({name: this._name, link: this._link});
  };

  _toggleLike(evt){
      evt.target.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.element__like').addEventListener('click', (evt) => this._toggleLike(evt));
    // открытие попапа просмотра карточки
    this._imageCard.addEventListener('click', () => this._handleImageClick());
  }
}

export default Card;

