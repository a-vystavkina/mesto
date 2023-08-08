import {profileEditButton, popupEdit, popupEditClose, formEditElement, nameInput,
  jobInput, profileTitle, profileSubtitle, profileAddButton, popupAdd, popupAddClose, formAddElement,
  addElement, elementTitle, elementLink, elementsContainer, elementsTemplate, titleInput,
  linkInput, viewPopup, viewPopupClose, viewPopupImage, viewPopupTitle, initialCards, selectorsObj}from './utils.js';
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
  });
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

// закрытие попапа просмотра изображения
viewPopupClose.addEventListener('click', () => {
  closePopup(viewPopup);
})

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

