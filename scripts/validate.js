const selectorsObj = {
  popupForm : '.popup__form',
  inputErrorClass : 'form__input_type_error',
  inputErrorActive : 'form__input-error_active',
  formInput : '.form__input',
  formSubmit : '.form__button'
};


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(selectorsObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectorsObj.inputErrorActive);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(selectorsObj.inputErrorClass);
  errorElement.classList.remove(selectorsObj.inputErrorActive);
  errorElement.textContent = '';
};

// функция, которая возвращает или убирает текст ошибки в зависимости от валидности поля ввода
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Функция, которая проверяет валидность поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(selectorsObj.formInput));
  const buttonElement = formElement.querySelector(selectorsObj.formSubmit);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// функция, которая находит все формы на странице и обрабатывает их
const enableValidation = (enableValidationObj) => {
  const formList = Array.from(document.querySelectorAll(enableValidationObj.popupForm));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation(selectorsObj);
