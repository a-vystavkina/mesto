import "./pages/index.css";
import {profileEditButton, popupEdit, popupEditClose, formEditElement, nameInput,
  jobInput, profileTitle, profileSubtitle, profileAddButton, popupAdd, popupAddClose, formAddElement,
  addElement, elementTitle, elementLink, elementsContainer, elementsTemplate, titleInput,
  linkInput, initialCards, selectorsObj}from '../utils/utils.js';
import Section from "../components/Section.js";
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";


// Добавить данные в форму редактирования fillInEditProfileFormInputs
function setProfileFormValues({ name, job }) {
  nameInput.value = name;
  jobInput.value = job;
}

// создание новой карточки
const addCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      viewImagePopup.open(name, link);
    }
  },'.element-template');
  const addElement = card.generateCard();
  return addElement;
};

//информация о пользователе
const userInfo = new UserInfo({
  name: '.profile__title',
  job: '.profile__subtitle'
});

// создание попапа с формой редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-card',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({
      name: data.name,
      job: data.job
    });
    editProfilePopup.close();
  }
});

editProfilePopup.setEventListeners();

// Обработчик кнопки Edit попапа редактирования профиля
profileEditBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  setProfileFormValues({
    name: info.name,
    job: info.job
  });
  editProfilePopup.open();
});

// создание попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (data) => {
    cardsList.addItem(addCard(data));
    addCardPopup.close();
  }
});

addCardPopup.setEventListeners();

//открытие попапа
popupAddNewCardOpenBtn.addEventListener('click', () => {
  formAddCardValidator.toggleButtonState();
  addCardPopup.open();
})

// отрисовка карточек на странице
const uploadElements = new Section({
  items: initialCards,
  renderer: (item) => {
    uploadElements.addItem(addCard(item));
  },
}, '.elements');

uploadElements.renderer();


/* Попап просмотра изображения */
const viewPopup = new PopupWithImage('.popup_type_img-card');
viewPopup.setEventListeners();


// валидация формы редактирования
const formEditValidator = new FormValidator(selectorsObj, formEditElement);
formEditValidator.enableValidation();

// валидация формы добавления новой карточки
const formAddCardValidator = new FormValidator(selectorsObj, popupAdd);
formAddCardValidator.enableValidation();

