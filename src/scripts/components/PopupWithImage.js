import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__figcaption');
  }

  open(title, link) {
    this._popupImage.src = link;
    this._popupTitle.textContent = title;
    this._popupImage.alt = title;
    super.open();
  }
}
