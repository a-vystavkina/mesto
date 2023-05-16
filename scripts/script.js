let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="job"]');
let formButton = document.querySelector('.form__button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  profileTitle.TextContent = nameInputValue;
  profileSubtitle.TextContent = jobInputValue;

  closePopup()
}

profileEditButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
