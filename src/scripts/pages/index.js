import "./index.css";
import {profileEditButton, popupEdit, formEditElement, nameInput,
  jobInput, profileTitle, profileSubtitle, profileAddButton, popupAdd, elementsContainer, elementsTemplate, initialCards,
  validationConfig} from '../utils/utils.js';

import Section from "../components/Section.js";
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

const formValidators = {};

function validateForms (validationConfig) {
  const formElements = Array.from(document.querySelectorAll(formClasses.popupForm));
  formElements.forEach(formElement => {
    const form = new FormValidator(validationConfig, formElement);
    formValidators[formElement.getAttribute('name')] = form;
    form.enableValidation();
  });
}

//Попап просмотра изображения
const viewImagePopup = new PopupWithImage('.popup_type_img-card');
viewImagePopup.setEventListeners();

//информация о пользователе
const userInfo = new UserInfo({
  nameSelector: nameInput,
  jobSelector: jobInput
});

// Добавить данные в форму редактирования
function setProfileFormValues({name, job }) {
  name = nameInput.value;
  job = jobInput.value;
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
});
