const selectorsObj = {
  popupForm : '.popup__form',
  inputErrorClass : 'form__input_type_error',
  inputErrorActive : 'form__input-error_active',
  formInput : '.form__input',
  formSubmit : '.form__button'
};

// функция, которая находит все формы на странице и обрабатывает их
const enableValidation = (enableValidationObj) => {
  const formList = Array.from(document.querySelectorAll(enableValidationObj.popupForm));
  formList.forEach((formElement) => {
    setEventListeners(formElement, enableValidationObj);
  });
};

const setEventListeners = (formElement, enableValidationObj) => {
  const inputList = Array.from(formElement.querySelectorAll(enableValidationObj.formInput));
  const buttonElement = formElement.querySelector(enableValidationObj.formSubmit);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, enableValidationObj);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Функция, которая проверяет валидность поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


// функция, которая возвращает или убирает текст ошибки в зависимости от валидности поля ввода
const checkInputValidity = (formElement, inputElement, enableValidationObj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, enableValidationObj);
  } else {
    hideInputError(formElement, inputElement, enableValidationObj);
  }
};


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, enableValidationObj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(enableValidationObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableValidationObj.inputErrorActive);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, enableValidationObj) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(enableValidationObj.inputErrorClass);
  errorElement.classList.remove(enableValidationObj.inputErrorActive);
  errorElement.textContent = '';
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.removeAttribute('disabled');
  }
};

enableValidation(selectorsObj);
