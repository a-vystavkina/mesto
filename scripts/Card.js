import {viewPopupImage, viewPopupTitle, viewPopup, viewPopupClose} from './utils.js';

export class Card {
  constructor(name, link, cardSelector, openPopup, closePopup) {
    this._container = document.querySelector(cardSelector);
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
    this._closePopup = closePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeCard() {
    const likeBtn = this._element.querySelector('.element__like');
    likeBtn.classList.toggle('element__like_active');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleOpenPopup() {
    viewPopupImage.src = this._link;
    viewPopupImage.alt = this._name;
    viewPopupTitle.textContent = this._name;
    this._openPopup(viewPopup);
  }

  _handleClosePopup() {
    viewPopupImage.src = '';
    viewPopupImage.alt = '';
    viewPopupTitle.textContent = '';
    this._closePopup(viewPopup);
  }

  _setEventListeners() {
    // открытие попапа просмотра изображения
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });
    // кнопка удаления карточки
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    // кнопка лайк
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeCard();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const elementImage = this._element.querySelector('.element__image');

    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

}
