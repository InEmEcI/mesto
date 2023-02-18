// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });


// ФОРМЫ
const allForms = document.querySelector('.popup__form')
// const formError = allForms.querySelector(`.${formInput.id}-error`);
// const formInput = allForms.querySelector('.form__input');
// const formError = allForms.querySelector(`.${formInput.id}-error`);


// input в поле "Имя"
const formInputName = document.querySelector('.popup__input_name_name');
// input в поле "Кто он"
// const formInputJob = allForms.querySelector('.popup__input_name_who-is-this');
// input в поле "Название"
// const newPlaceName = allForms.querySelector('.popup__input_type_card-name');
// input в поле "Ссылка на картинку"
// const newPlaceLink = allForms.querySelector('.popup__input_type_photo-link');




// const showError = (input, form) => {
//   const errorName = form.querySelector(`.${input.id}'-error'`);
//   errorName.textContent = input.validationMessage;
// };

// const hideError = (input, form) => {
//   const errorName = form.querySelector(`.${input.id}'-error'`);
//   errorName.textContent = '';
// };


// показать класс ошибки с элемента input
const showError = (input) => {
  // input.classList.add('.popup__error_visible');
  // console.log('ОШИБКА!!!');
  console.log(input.validity.valid);
};

// удалить класс ошибки с элемента input
const hideError = (input) => {
  input.classList.remove('.popup__error_visible');
};

// проверка на валидность в поле "Имя"
const checkInputValidity = () => {
  if (!popup__input_name_name.validity.valid){
      showError(popup__input_name_name);
      } else hideError (popup__input_name_name);
};

formInputName.addEventListener('input', showError);




// Слушатель события input
// formInputName.addEventListener('input', checkInputValidity());

// formInputJob.addEventListener('input', function (evt) {
//   console.log(evt.target.validity.valid);
// })




// allForms.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// formInput.addEventListener('input', function (evt) {
//   console.log(evt.target.validity);
// });
