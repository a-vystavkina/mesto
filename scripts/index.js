const profileEditButton = document.querySelector('.profile__edit-button'); //Кнопка редактирования
const popupEdit = document.querySelector('.popup_type_edit-card'); //Окно редактирования
const popupEditClose = popupEdit.querySelector('.popup__close'); //Кнопка закрытия окна редактирования
const formEditElement = document.querySelector('form[name="edit-form"]'); // Форма редактирования
const nameInput = popupEdit.querySelector('input[name="name"]');
const jobInput = popupEdit.querySelector('input[name="job"]');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const profileAddButton = document.querySelector('.profile__add-button'); //Кнопка добавления карточки
const popupAdd = document.querySelector('.popup_type_add-card'); // Окно добавления карточки
const popupAddClose = popupAdd.querySelector('.popup__close'); //Кнопка закрытия окна добавления карточки
const formAddElement = document.querySelector('form[name="add-form"]'); // Форма добавления карточки
const addElement = formAddElement.querySelector('.form__button');
const elementTitle = document.querySelector('.element__title');
const elementLink = document.querySelector('.element__image');
const elementsContainer = document.querySelector('.elements'); // карточки
const elementsTemplate = document.querySelector('.element-template').content; // шаблон для добавления карточки
const titleInput = popupAdd.querySelector('input[name="title"]');
const linkInput = popupAdd.querySelector('input[name="link"]');
let elementLike = document.querySelector('.element__like'); // лайк карточки
let elementDelete = document.querySelector('.element__delete'); // удаление карточки
const viewPopup = document.querySelector('.popup_type_img-card'); // Окно с картинкой
const viewPopupClose = viewPopup.querySelector('.popup__close'); //Кнопка закрытия окна с картинкой
const viewPopupImage = viewPopup.querySelector('.popup__image');
const viewPopupTitle = viewPopup.querySelector('.popup__figcaption');


//Шесть карточек «из коробки»
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const selectorsObj = {
  popupForm : '.popup__form',
  inputErrorClass : 'form__input_type_error',
  inputErrorActive : 'form__input-error_active',
  formInput : '.form__input',
  formSubmit : '.form__button'
};

export {viewPopupImage, viewPopupTitle, viewPopup, viewPopupClose};
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

//открыть или закрыть popup
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
};

const closePopup = (popup) => {
  document.removeEventListener('keyup', handleEscUp);
  popup.classList.remove('popup_opened');
};

// обработчик клика по кнопке Escape
const handleEscUp = (event) => {
  event.preventDefault();

  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

// закрытие попапа кликом на оверлей
function closeByOverlayClick (event) {
  const activePopup = document.querySelector('.popup_opened');
  if (event.target.classList.contains('popup')) {
    closePopup(activePopup);
  }
}

// Добавить данные в форму редактирования
function setProfileFormValues() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup(popupEdit);
}

const addCard = (name, link) => {
  const card = new Card(name, link, '.element-template', openPopup, closePopup).generateCard();
  elementsContainer.prepend(card);
};

const uploadElements = (array) => {
  array.forEach((item) => {
    addCard(item.name, item.link);
  })
};

// Обработчики попапа редактирования
profileEditButton.addEventListener('click', () => {
  openPopup(popupEdit);
  setProfileFormValues();
});

popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);

// Обработчики попапа добавления карточки
profileAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

popupAddClose.addEventListener('click', () => {
 closePopup(popupAdd);
});

formAddElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(titleInput.value, linkInput.value);
  titleInput.value = '';
  linkInput.value = '';

  closePopup(popupAdd);
  formAddCardValidator.toggleButtonState();

});

popupEdit.addEventListener('mousedown', closeByOverlayClick);
popupAdd.addEventListener('mousedown', closeByOverlayClick);
viewPopup.addEventListener('mousedown', closeByOverlayClick);

uploadElements(initialCards);

// валидация формы редактирования
const formEditValidator = new FormValidator(selectorsObj, formEditElement);
formEditValidator.enableValidation();

// валидация формы добавления новой карточки
const formAddCardValidator = new FormValidator(selectorsObj, popupAdd);
formAddCardValidator.enableValidation();

