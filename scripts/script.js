let profileEditButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__name');
let jobInput = document.querySelector('.form__job');
let formButton = document.querySelector('.form__button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function openPopUp() {
  popUp.classList.add('popup_opened');
}

function closePopUp() {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  profileTitle.TextContent = inputName;
  profileSubtitle = inputJob;
}

profileEditButton.addEventListener('click', openPopUp);
popUpClose.addEventListener('click', closePopUp);
formElement.addEventListener('submit', handleFormSubmit);
formButton.addEventListener('click', closePopUp);
