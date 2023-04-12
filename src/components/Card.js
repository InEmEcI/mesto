class Card {
  constructor({
    data,
    templateSelector,
    clickToImage,
    userId,
    handleConfirmation,
  }) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._userId = userId;
    this._userOwner = data.owner._id;
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._clickToImage = clickToImage;
    this._handleConfirmation = handleConfirmation;
  }

  // здесь выполним все необходимые операции, чтобы вернуть разметку
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  _removeButton() {
    if (this._userOwner !== this._userId) {
      this._element.querySelector('.element__trash').remove();
    }
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
    this._cardDelButton = this._element.querySelector('.element__trash');
    this._removeButton();
    this._setEventListeners();

    return this._element; // Вернём элемент наружу
  }

  deleteCard = () => {
    this._element.remove();
  };

  _handleImageClick() {
    this._clickToImage({ name: this._name, link: this._link });
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._cardDelButton.addEventListener('click', () => {
      this._handleConfirmation();
    });
    this._element
      .querySelector('.element__like')
      .addEventListener('click', (evt) => this._toggleLike(evt));
    // открытие попапа просмотра карточки
    this._imageCard.addEventListener('click', () => this._handleImageClick());
  }

}

export default Card;
