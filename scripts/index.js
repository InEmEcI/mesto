// const elementItem = document.querySelector('.element');

// кнопка like
const likeButton = document.querySelector('.element__like');

const popupElement = document.querySelector('.popup');
const profileOpenButton = document.querySelector('.profile__edit');
const popupCloseElement = popupElement.querySelector('.popup__close');
const profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileWhoIsThisElement = profileElement.querySelector('.profile__who-is-this');
let popupNameElement = popupElement.querySelector('.popup__name');
let popupWhoIsThisElement = popupElement.querySelector('.popup__who-is-this');
const popupContentSaveButton = popupElement.querySelector('.popup__save');
const popupAddNewCardSaveButton = popupElement.querySelector('.new-card-save');
const formElement = document.querySelector('.popup__form-about');
let nameInput = formElement.querySelector('.popup__input_name_name');
let jobInput = formElement.querySelector('.popup__input_name_who-is-this');


// Карточки с городами
const cardsSection = document.querySelector('.elements');

// Карточка
// const cardsSectionElement = cardsSection.querySelector('.element');
// const cardsSectionElement = document.querySelector('.element');

// изображение в карточке
// const cardElementImage = cardsSectionElement.querySelector('.element__image').src;

// карточка с городами в template(шаблоне) (<article class="element">)
const templateCard = document.querySelector('#template-card').content.querySelector('.element');
// console.log(templateCard);

// кнопка добавления карточки
const newCardButton = document.querySelector('.profile__add-new');

// кнопка удаления карточки
const elementTrashButton = cardsSection.querySelector('.element__trash');

// функция для добавления карточки
function createCard(items) {
  items.forEach((item) => {
    const card = templateCard.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').alt = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__trash').addEventListener('click', () => card.remove());
    card.querySelector('.element__like').addEventListener('click',
      function (event) {
        event.target.classList.toggle('element__like_active');
      });

    cardsSection.prepend(card);
  })
}

// вставляем карточки из массива initialCards[]
createCard(initialCards);

// createCard(newCard);

// -------------- УЖЕ БЫЛО ---------------------------

// открытие попапа в профиле
const popupOpen = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
}

// закрытие попапа в профиле
const popupClose = function () {
  popupElement.classList.remove('popup_opened');
}

// заполнение полей в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWhoIsThisElement.textContent = jobInput.value;
  popupClose();
}

profileOpenButton.addEventListener('click', popupOpen);
popupCloseElement.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);

