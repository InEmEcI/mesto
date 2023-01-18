// const elementItem = document.querySelector('.element');
// кнопка like
const likeButtons = document.querySelectorAll('.element__like');
const popupElement = document.querySelector('.popup');
const profileOpenButton = document.querySelector('.profile__edit');
const popupCloseElement = popupElement.querySelector('.popup__close');
const profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileWhoIsThisElement = profileElement.querySelector('.profile__who-is-this');
let popupNameElement = popupElement.querySelector('.popup__name');
let popupWhoIsThisElement = popupElement.querySelector('.popup__who-is-this');
const popupContentSaveButton = popupElement.querySelector('.popup__save');
const formElement = document.querySelector('.popup__form-about');
let nameInput = formElement.querySelector('.popup__input_name_name');
let jobInput = formElement.querySelector('.popup__input_name_who-is-this');


const popupOpen = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
}

const popupClose = function () {
  popupElement.classList.remove('popup_opened');
}

// const popupVisibility = function () {

//   popupElement.classList.toggle('popup_opend');
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileWhoIsThisElement.textContent;
// }

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWhoIsThisElement.textContent = jobInput.value;
  popupClose();
}


// for (let i = 0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener('click', function(){
//     likeButtons[i].classList.toggle('element__like_active');
//   })
// }


profileOpenButton.addEventListener('click', popupOpen);
popupCloseElement.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);
