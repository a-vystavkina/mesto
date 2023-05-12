let profileEditButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let popUpClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.name__input');
let jobInput = document.querySelector('.job__input');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function openPopUp() {
    popUp.classList.add('popup_opened');
}  

function closePopUp() {
    popUp.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    let inputName = nameInput.value;
    let inputJob = jobInput.value;
    profileTitle.TextContent = inputName;
    profileSubtitle = inputJob;
}

profileEditButton.addEventListener('click', openPopUp);
popUpClose.addEventListener('click', closePopUp);
formElement.addEventListener('submit', handleFormSubmit); 