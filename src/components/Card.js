class Card {
  constructor({ data, templateSelector, clickToImage, userId, handleConfirmation, clickToLike }) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._userId = userId;
    this._userOwner = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes.length;
    this._templateSelector = templateSelector;
    this._clickToImage = clickToImage;
    this._handleConfirmation = handleConfirmation;
    this._isLiked = data.likes.some((like) => like._id === this._userId)
    this._clickToLike = clickToLike;
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
    this._cardDelButton = this._element.querySelector('.element__trash');
    this._likeCard = this._element.querySelector('.element__like');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    if (this._isLiked) {
      this._addLike()
    }
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._likeCounter.textContent = this._likes;
    this._removeButton();
    this._setEventListeners();

    return this._element; // Вернём элемент наружу
  }

  _handeLike() {
    this._clickToLike(this._isLiked, this._cardId, this._removeLike.bind(this), this._changeLikeNumber.bind(this), this._addLike.bind(this))
  }

  deleteCard = () => {
    this._element.remove();
  };

  _handleImageClick() {
    this._clickToImage({ name: this._name, link: this._link });
  }

  _changeLikeNumber(data) {
    this._likeCounterGet = data.likes.length;
  }

  _addLike() {
    this._likeCard.classList.add('element__like_active');
    this._isLiked = true;
    this._likeCounter.textContent = this._likeCounterGet;
  }

  _removeLike() {
    this._likeCard.classList.remove('element__like_active');
    this._isLiked = false;
    this._likeCounter.textContent = this._likeCounterGet;
  }


  _setEventListeners() {

    this._cardDelButton.addEventListener('click', () => {
      this._handleConfirmation();
    })

    this._likeCard.addEventListener('click', () => {
      this._handeLike()
    });

    // открытие попапа просмотра карточки
    this._imageCard.addEventListener('click', () => this._handleImageClick());
  }

}

export default Card;
