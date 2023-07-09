const enableValidationArray = {
  popupForm : '.popup__form',
  inputErrorClass : 'form__input_type_error',
  inputErrorActive : 'form__input-error_active',
  formInput : '.form__input',
  formSubmit : '.form__button',
  formSet : '.form__set'
};


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(enableValidationArray.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableValidationArray.inputErrorActive);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(enableValidationArray.inputErrorClass);
  errorElement.classList.remove(enableValidationArray.inputErrorActive);
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
  const inputList = Array.from(formElement.querySelectorAll(enableValidationArray.formInput));
  const buttonElement = formElement.querySelector(enableValidationArray.formSubmit);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// функция, которая находит все формы на странице и обрабатывает их
const enableValidation = (enableValidationArray) => {
  const formList = Array.from(document.querySelectorAll(enableValidationArray.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(formElement.querySelectorAll(enableValidationArray.formSet));

    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};

enableValidation(enableValidationArray);
