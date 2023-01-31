// const elementItem = document.querySelector('.element');

// кнопка like
const likeButton = document.querySelector('.element__like');

// попап профиля
const popupElement = document.querySelector('.popup_profile');

// кнопка открытия попапа в профиле
const profileOpenButton = document.querySelector('.profile__edit');

// кнопка закрытия попапа в профиле
const popupCloseElement = popupElement.querySelector('.popup__close');

// профиль
const profileElement = document.querySelector('.profile');

// как зовут (в профиле)
const profileName = profileElement.querySelector('.profile__name');

// кто он (в профиле)
const profileWhoIsThisElement = profileElement.querySelector('.profile__who-is-this');

// как зовут (в попапе)
const popupNameElement = popupElement.querySelector('.popup__name');

// кто он (в попапе)
const popupWhoIsThisElement = popupElement.querySelector('.popup__who-is-this');

// кнопка сохранения информации после редактирования в попапе профиля
const popupContentSaveButton = popupElement.querySelector('.popup__save');

// форма новой карточки
const popupNewPlaceForm = document.querySelector('.popup_new-place-form');

// попап новой карточки  popup-new-card
const popupNewCardItem = document.querySelector('.popup_new-card');

// имя карточки а попапе
const newCardName = document.querySelector('.popup__input_type_card_name')
// ссылка на картинку карточки а попапе
const newCardLink = document.querySelector('.popup__input_type_photo-link')

// кнопка сохранения информации в попапе при создании новой карточки
const popupAddNewCardSaveButton = popupNewCardItem.querySelector('.new-card-save');

// кнопка открытия попапа новой карточки
const popupAddNewCardOpen = document.querySelector('.profile__add-new')

// кнопка закрытия попапа новой карточки
const popupAddNewCardCloseButton = popupNewCardItem.querySelector('.popup-new-card_close');

// форма в попапе профиля
const formElement = document.querySelector('.popup__form-about');

// имя в попапе профиля
const nameInput = formElement.querySelector('.popup__input_name_name');
// "кто он" в попапе профиля
const jobInput = formElement.querySelector('.popup__input_name_who-is-this');

// закрытие попапа
const closes = document.querySelectorAll('.popup__close');

// Карточки с городами
const cardsSection = document.querySelector('.elements');

// Карточка
const cardsSectionElement = cardsSection.querySelector('.element');

// изображение в карточке
const cardImage = document.querySelector('.popup-card-image__figure');

// карточка с городами в template(шаблоне) (<article class="element">)
const templateCard = document.querySelector('#template-card').content.querySelector('.element');

// кнопка добавления карточки
const newCardButton = document.querySelector('.profile__add-new');

// кнопка удаления карточки
const elementTrashButton = cardsSection.querySelector('.element__trash');


const cardImagePhoto = document.querySelector('.popup-card-image__photo');

const popupCardImage = document.querySelector('.popup-card-image');

const popupCardImageFigcaption = document.querySelector('.popup-card-image__figcaption');


// закрытие попапа
const popupClose = function (evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

// открытие попапа в профиле
const popupOpen = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
}

// открытие попапа
const openAddNewCardPopup = function () {
  popupNewCardItem.classList.add('popup_opened');
}

// функция для добавления карточки
function createCard(items) {
  items.forEach((item) => {
    const card = templateCard.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').alt = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__trash').addEventListener('click', () => card.remove());
    card.querySelector('.element__like').addEventListener('click',
      function (evt) {
        evt.target.classList.toggle('element__like_active');
      });

  // открытие попапа просмотра карточки
    card.querySelector('.element__image').addEventListener('click',
      function () {
        cardImagePhoto.src = item.link;
        cardImagePhoto.alt=item.name
        popupCardImageFigcaption.textContent = item.name;
        popupCardImage.classList.toggle('popup_opened');
      })

    cardsSection.prepend(card);
  })
}


// вставляем карточки из массива initialCards[]
createCard(initialCards);

// вешаем события "закрытие попапа" на каждый крестик
closes.forEach((closeButton) => {
  closeButton.addEventListener('click', popupClose);
})

// заполнение полей в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWhoIsThisElement.textContent = jobInput.value;
  popupClose(evt);
}

// функция добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  const newCard = [{ name: newCardName.value, link: newCardLink.value, }];
  createCard(newCard);
  popupNewPlaceForm.reset();
  popupClose(evt);
}


profileOpenButton.addEventListener('click', popupOpen);
popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup);
formElement.addEventListener('submit', handleFormSubmit);
popupNewPlaceForm.addEventListener('submit', addNewCard);
