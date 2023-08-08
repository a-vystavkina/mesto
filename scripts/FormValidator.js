export class FormValidator {
  constructor(selectorsObj, formElement) {
    this._config = selectorsObj;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.formInput));
    this._buttonElement = this._formElement.querySelector(this._config.formSubmit);
  }

  _setEventListeners() {
    this.toggleButtonState(this._inputList, this._buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formElement, inputElement);
        this.toggleButtonState(this._inputList, this._buttonElement);
      });
    });

    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })
  };

  // Функция, которая проверяет валидность поля
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // Функция, которая добавляет класс с ошибкой
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.inputErrorActive);
  };

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(formElement, inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.inputErrorActive);
    errorElement.textContent = '';
  };

  // Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.removeAttribute('disabled');
    }
  };

  // функция, которая возвращает или убирает текст ошибки в зависимости от валидности поля ввода
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(this._formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(this._formElement, inputElement);
    }
  };

  // функция, которая находит все формы на странице и обрабатывает их
  enableValidation() {
    this._setEventListeners();
  };
}
