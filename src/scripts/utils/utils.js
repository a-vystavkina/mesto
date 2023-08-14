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

export {profileEditButton, popupEdit, popupEditClose, formEditElement, nameInput,
  jobInput, profileTitle, profileSubtitle, profileAddButton, popupAdd, popupAddClose, formAddElement,
  addElement, elementTitle, elementLink, elementsContainer, elementsTemplate, titleInput,
  linkInput, viewPopup, viewPopupClose, viewPopupImage,viewPopupTitle, initialCards, selectorsObj};
