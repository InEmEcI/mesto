class UserInfo {
  constructor({name, about, avatar}) {
      this._name = document.querySelector(name);
      this._about = document.querySelector(about);
      this._avatar = document.querySelector(avatar);
      this._id = '';
      // const userId = null;
  }

  getUserInfo() {

      this._userData = {
          name: this._name.textContent,
          about: this._about.textContent,
          userId: this._id
      }
      return this._userData;
  }

  setUserInfo({name, about, avatar, _id}) {
      this._name.textContent = name;
      this._about.textContent = about;
      this._avatar.src = avatar;
      this._id = _id;
      // console.log(this._id);
  }

  setUserAvatar(link) {
      this._avatar.src = link.avatar;
  }
}

export default UserInfo;
