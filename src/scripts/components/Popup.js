export default class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._closeBtn = this._popup.querySelector('.popup__close');
    this._escapeUp = this._handleEscUp.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escapeUp);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escapeUp);
  }

  _handleEscUp(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup')) {
        this.close();
      }
    });
  }
}
