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
let elementLike; // лайк карточки
let elementDelete; // удаление карточки
const viewPopup = document.querySelector('.popup_type_img-card'); // Окно с картинкой
const viewPopupClose = viewPopup.querySelector('.popup__close'); //Кнопка закрытия окна с картинкой

//открыть или закрыть popup
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

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

// Добавление карточки
const card = function(nameValue, imgValue) {
  const element = elementsTemplate.querySelector('.element').cloneNode(true);
  const elementImg = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  elementLike = element.querySelector('.element__like');
  elementDelete = element.querySelector('.element__delete');
  const viewPopupImage = viewPopup.querySelector('.popup__image');
  const viewPopupTitle = viewPopup.querySelector('.popup__figcaption');

  elementTitle.textContent = nameValue;
  elementImg.src = imgValue;
  elementImg.alt = nameValue;

  //Лайк карточки
  elementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  //Удаление карточки
  elementDelete.addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });

  //окно просмотра изображений
  const openViewPopup = () => {
    openPopup(viewPopup);

    viewPopupImage.src = elementImg.src;
    viewPopupTitle.textContent = elementTitle.textContent;
    viewPopupImage.alt = elementTitle.textContent;

  };

  // Обработчики окна просмотра изображения
  elementImg.addEventListener('click', openViewPopup);

  return element;
};

const addCard = (name, link) => {
  elementsContainer.prepend(card(name, link));
};

const uploadElements = (array) => {
  array.forEach((el) => {
    return addCard(el.name, el.link);
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

addElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  const name = titleInput;
  const img = linkInput;

  addCard(name.value, img.value);

  name.value = "";
  img.value = "";

  closePopup(popupAdd);
});

//закрытие окна просмотра изображения
viewPopupClose.onclick = () => closePopup(viewPopup);

uploadElements(initialCards);
