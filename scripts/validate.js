const showInputError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
};

const hideInputError = (formElement, inputElement, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, object);
  } else {
    hideInputError(formElement, inputElement, object);
  }
};

const setEventListeners = (formElement, object) => {
  const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  const buttonElement = formElement.querySelector(object.submitButtonSelector);

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, object);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, object);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, object);
    });
  });
};

const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, object)
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, object) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(object.inactiveButtonClass, 'disabled');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(object.inactiveButtonClass, 'disbled');
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
