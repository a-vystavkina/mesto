export default class UserInfo {
  constructor({ nameElement, jobElement }) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
  }

  // возвращает объект с данными пользователя
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent
    }
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}
