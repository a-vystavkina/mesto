import "./index.css";
import {profileEditButton, popupEdit, formEditProfile, formEditElement, nameInput,
  jobInput, profileTitle, profileSubtitle, profileAddButton, popupAdd, formAddNewCard, elementsContainer, elementsTemplate, initialCards,
  validationConfig} from '../utils/utils.js';

import Section from "../components/Section.js";
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

// валидация формы редактирования
const formEditProfileValidator = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidator.enableValidation();
// валидация формы добавления новой карточки
const formAddNewCardValidator = new FormValidator(validationConfig, formAddNewCard);
formAddNewCardValidator.enableValidation();


//Попап просмотра изображения
const viewImagePopup = new PopupWithImage('.popup_type_img-card');
viewImagePopup.setEventListeners();

//информация о пользователе
const userInfo = new UserInfo({
  nameElement: profileTitle,
  jobElement: profileSubtitle
});

// Добавить данные в форму редактирования
function setProfileFormValues({name, job }) {
  name = profileTitle.value;
  job = profileSubtitle.value;
}

const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      viewImagePopup.open(name, link);
    }}, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
};

const cardsSection = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsSection.addItem(createCard(item));
  },
}, '.elements');
cardsSection.renderItems();

const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-card',
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo({
      name: dataForm.name,
      job: dataForm.job
    });
    editProfilePopup.close();
  }
});

editProfilePopup.setEventListeners();

// Обработчик кнопки Edit попапа редактирования профиля
profileEditButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  setProfileFormValues({
    name: info.name,
    job: info.job
  });
  editProfilePopup.open();
  formEditProfileValidator.toggleButtonState();
});


// создание попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (formData) => {
    cardsSection.addItem(createCard(formData));
    addCardPopup.close();
  }
});

addCardPopup.setEventListeners();

profileAddButton.addEventListener('click', function () {
  addCardPopup.open();
  formAddNewCardValidator.toggleButtonState();
});




