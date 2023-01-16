// const elementItem = document.querySelector('.element');
// кнопка like
const likeButtons = document.querySelectorAll('.element__like');

const popupElement = document.querySelector('.popup');
const profileOpenButton = document.querySelector('.profile__edit');
const popupCloseElement = popupElement.querySelector('.popup-content__close');
const profileElement = document.querySelector('.profile');
let profileName = profileElement.querySelector('.profile__name');
let profileWhoIsThisElement = profileElement.querySelector('.profile__who-is-this');
let popupNameElement = popupElement.querySelector('.popup-content__name');
let popupWhoIsThisElement = popupElement.querySelector('.popup-content__who-is-this');
const popupContentSaveButton = popupElement.querySelector('.popup-content__save');

const popupVisibility = function () {
  popupElement.classList.toggle('popup_is-opend');
  nameInput.value = profileName.textContent;
  jobInput.value = profileWhoIsThisElement.textContent;
}

profileOpenButton.addEventListener('click', popupVisibility);
popupCloseElement.addEventListener('click', popupVisibility);
const formElement = document.querySelector('.popup-content__form-about');
let nameInput = formElement.querySelector('.popup-content__input_name_name');
let jobInput = formElement.querySelector('.popup-content__input_name_who-is-this');

// for (let i = 0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener('click', function(){
//     likeButtons[i].classList.toggle('element__like_active');
//   })
// }

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  profileName.textContent = nameInput.value;
  profileWhoIsThisElement.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', popupVisibility);
