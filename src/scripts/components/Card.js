export default class Card {
  constructor({ data, cardSelector, userId, handleCardClick, handleDeleteIconClick, handleSetLike, handleRemoveLike }) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._userId = userId;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._likes = data.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  // Получаем шаблон карточки
  _getTemplate() {
      this._card = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return this._card;
  }


  // Удаление карточки
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    if (this._likeBtn.classList.contains('element__like_active')) {
      this._handleRemoveLike(this._cardId);
    } else {
      this._handleSetLike(this._cardId);
    }
  }

  _setEventListeners() {
    // открытие попапа просмотра изображения
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._deleteBtn.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId);
    });

    this._likeBtn.addEventListener('click', () => {
      this._handleLikeCard();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._likeBtn = this._element.querySelector('.element__like');
    this._likesNumber = this._element.querySelector('.element__like-number');
    this._deleteBtn = this._element.querySelector('.element__delete');

    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._checkDeleteButtonVisibility();
    this._checkIsLiked();
    this._likesNumber.textContent = this._likes.length;
    this._setEventListeners();

    return this._element;
  }

  isLiked() {
    this._likes.some((user) => {
      return this._userId === user._id;
    });
  }

  // Стоит ли лайк на карточке
  _checkIsLiked() {
    if (this.isLiked()) {
      this._likeBtn.classList.add('element__like_active');
    }
  }


  updateLikes(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;
    this._likeBtn.classList.toggle('element__like_active');
  }

  _checkDeleteButtonVisibility() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteBtn.remove();
    }
  }
}
