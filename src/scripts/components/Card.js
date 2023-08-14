
export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    // открытие попапа просмотра изображения
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
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
