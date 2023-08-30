import "./index.css";
import {profileEditButton, formEditProfile, nameInput,
  jobInput, profileTitle, profileSubtitle, profileAddButton, formAddNewCard, initialCards,
  validationConfig, popupEditAvatar, formEditAvatar, buttonEditAvatar, avatar} from '../utils/utils.js';

import Section from "../components/Section.js";
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Api from "../components/Api.js";

/* ---------- API ----------- */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-74',
  headers: {
    authorization: '9cae5362-8d39-4179-9c56-a7f18d5e8ca0',
    'Content-Type': 'application/json'
  }
});

let userId;

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardsSection.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

//информация о пользователе
const userInfo = new UserInfo({
  nameElement: profileTitle,
  jobElement: profileSubtitle,
  avatarElement: avatar
});

// валидация формы редактирования
const formEditProfileValidator = new FormValidator(validationConfig, formEditProfile);
formEditProfileValidator.enableValidation();
// валидация формы добавления новой карточки
const formAddNewCardValidator = new FormValidator(validationConfig, formAddNewCard);
formAddNewCardValidator.enableValidation();
// Валидация формы редактирования аватара пользователя
const formEditAvatarValidator = new FormValidator(validationConfig, formEditAvatar);
formEditAvatarValidator.enableValidation();

//Попап просмотра изображения
const viewImagePopup = new PopupWithImage('.popup_type_img-card');
viewImagePopup.setEventListeners();

//создание карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    cardSelector: '.element-template',
    userId: userId,
    handleCardClick: (name, link) => {
      viewImagePopup.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.setSubmitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.updateLikes(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.updateLikes(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const cardsSection = new Section({
  renderer: (card) => {
    cardsSection.appendItem(createCard(card));
  },
}, '.elements');

const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-card',
  handleFormSubmit: (dataForm) => {
    editProfilePopup.setIsLoading(true);
    api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editProfilePopup.setIsLoading(false);
      });
  }
});

editProfilePopup.setEventListeners();

// Создание попапа редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.setIsLoading(true);
    api.editAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.setIsLoading(false);
      });
  }
});

editAvatarPopup.setEventListeners();

// создание попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (formData) => {
    addCardPopup.setIsLoading(true);
    api.addCard(formData)
      .then((formData) => {
        cardsSection.prependItem(createCard(formData));
        addCardPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addCardPopup.setIsLoading(false);
      });
  }
});

addCardPopup.setEventListeners();

//Удаление карточки
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: '.popup_type_delete-card'
});

deleteCardPopup.setEventListeners();

// Обработчик кнопки Edit попапа редактирования профиля
profileEditButton.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;
  formEditProfileValidator.toggleButtonState();
  editProfilePopup.open();
});

// Обработчик кнопки Edit аватара пользователя
buttonEditAvatar.addEventListener('click', () => {
  formEditAvatarValidator.toggleButtonState();
  editAvatarPopup.open();
});


// Обработчик кнопки добавления карточки
profileAddButton.addEventListener('click', function () {
  formAddNewCardValidator.toggleButtonState();
  addCardPopup.open();
});




