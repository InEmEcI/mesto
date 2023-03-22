import { initialCards } from '../utils/constants.js';
import {
  profileName, profileWhoIsThisElement,
  popupProfile, profileOpenButton,
  formElement,
  // nameInput, jobInput,
  cardsSection,
  popupNewPlaceForm, newCardName, newCardLink,
  popupAddNewCardOpen, cardName, photoLink,
  object
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';



const userInfo = new UserInfo({ name: profileName, whoIsThis: profileWhoIsThisElement });

const saveUserInfo = (input) => {
  userInfo.setUserInfo(input.name, input.job)
};

const editUserInfo = new PopupWithForm(popupProfile, saveUserInfo)



profileOpenButton.addEventListener('click', () => {
  editUserInfo.open();
  profileValidation.resetValidation();
  editUserInfo.setInputValues(userInfo.getUserInfo());
});

editUserInfo.setEventListeners();






// const userInfo = new UserInfo({profileName, profileWhoIsThisElement});

// const editUserInfo = new PopupWithForm({popupProfile, profileWhoIsThisElement});


// const editUserInfo = new PopupWithForm({
//   selector: '.profile__about',
//   submit: ({profileName, profileWhoIsThisElement}) => {
//     userInfo.countInfo({name: profileName, whoIsThis: profileWhoIsThisElement});
//     editUserInfo.close();
//   }
// });

// editUserInfo.setEventListeners();



// открытие попапа в профиле
// const openProfilePopup = function () {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileWhoIsThisElement.textContent;
//   profileValidation.resetValidation();
//   openPopup(popupProfile);
// }

// // // // заполнение полей в профиле
// function saveProfileChanges(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileWhoIsThisElement.textContent = jobInput.value;
//   // closePopup(popupProfile);
//   editUserInfo.close();
// }





// открытие попапа с картинкой
const popupWithImage = new PopupWithImage('.popup-card-image');
const clickToImage = ({ name, link }) => { popupWithImage.open({ name, link }) };
popupWithImage.setEventListeners();

// функция для создания новой карточки
function createCard(data) {
  const cardElement = new Card(data, '.template-card', clickToImage);
  return cardElement.generateCard();
}

// добавляем первые шесть карточек на страницу
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardContainer = createCard(item);
    cardsSection.prepend(cardContainer);
  },
},'.elements');
section.renderItems();

function headleAddSubmit(data){
  section.addItem(createCard(data));
}


// для добавления карточки
const popupWithFormCard = new PopupWithForm('.popup_new-card', headleAddSubmit);
popupWithFormCard.setEventListeners();

// функция открытия попапа для создания новой карточки
const openAddNewCardPopup = function () {
  // popupNewPlaceForm.reset();
  cardsValidation.resetValidation();
  popupWithFormCard.open();
}

// функция добавления новой карточки
// function addNewCard(evt) {
//   // evt.preventDefault();
//   // cardsValidation.resetValidation();
//   const newCard = { name: newCardName.value, link: newCardLink.value, };
//   renderCards(newCard);
//   popupWithFormCard.close();
// }

const cardsValidation = new FormValidator(object, popupNewPlaceForm);
cardsValidation.enableValidation();

const profileValidation = new FormValidator(object, formElement);
profileValidation.enableValidation();

// СЛУШАТЕЛИ


// profileOpenButton.addEventListener('click', editUserInfoButton);
// formElement.addEventListener('submit', saveProfileChanges);

popupAddNewCardOpen.addEventListener('click', openAddNewCardPopup);
// popupNewPlaceForm.addEventListener('submit', addNewCard);

