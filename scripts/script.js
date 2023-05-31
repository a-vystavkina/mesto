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

const togglePopup = (popup) => {
  popup.classList.toggle('popup_opened');
};

// Добавить данные в форму редактирования
function addValue() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  togglePopup(popupEdit);
}

// Добавление карточки
const addCard = (nameValue, imgValue) => {
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
    togglePopup(viewPopup);

    viewPopupImage.src = elementImg.src;
    viewPopupTitle.textContent = elementTitle.textContent;
    viewPopupImage.alt = elementTitle.textContent;

    viewPopupClose.onclick = () => togglePopup(viewPopup);
  };

  // Обработчики окна просмотра изображения
  elementImg.addEventListener('click', openViewPopup);

  elementsContainer.prepend(element);
};

const uploadElements = (array) => {
  array.map((el) => {
  return addCard(el.name, el.link);
  });
};


// Обработчики попапа редактирования
profileEditButton.addEventListener('click', () => {
  togglePopup(popupEdit);
  addValue();
});

popupEditClose.addEventListener('click', () => {
  togglePopup(popupEdit);
});

formEditElement.addEventListener('submit', handleFormSubmit);

// Обработчики попапа добавления карточки
profileAddButton.addEventListener('click', () => {
  togglePopup(popupAdd);
});

popupAddClose.addEventListener('click', () => {
  togglePopup(popupAdd);
});

addElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  const name = titleInput;
  const img = linkInput;

  addCard(name.value, img.value);

  name.value = "";
  img.value = "";

  togglePopup(popupAdd);
});

uploadElements(initialCards);
