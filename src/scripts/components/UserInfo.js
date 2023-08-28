export default class UserInfo {
  constructor({ nameElement, jobElement, avatarElement }) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
    this._avatarElement = avatarElement;
  }

  getUserInfo() {
    return {
      nameElement: this._nameElement.textContent,
      jobElement: this._jobElement.textContent,
      avatarElement: this._avatarElement.src
    }
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.job;
    this._avatarElement.src = data.avatar;
  }
}
