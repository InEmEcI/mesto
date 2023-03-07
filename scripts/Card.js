
class Card {

  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._link = data.link;
    this._name = data.name;
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
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }

}

// initialCards.forEach((item) => {
//   // Создадим экземпляр карточки
//   const card = new Card(item.name, item.link);
//   // Создаём карточку и возвращаем наружу
//   const cardElement = card.generateCard();

//   // Добавляем в DOM
//   document.body.prepend(cardElement);  // правильно?
// });

export default Card;

