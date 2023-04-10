class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkError() {
    return res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getCards() {
    return fetch(this._url + `/cards/`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkError())
  }

  getUser() {
    return fetch(this._url + `/users/me/`, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkError())
  }

  editUserInfo(info) {
    return fetch(this._url + `/users/me/`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    }).then(this._checkError())
  }


  changeUserAvatar(data) {
    return fetch(this._url + `/users/me/avatar/`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    }).then(this._checkError())
  }

  addNewCard(data) {
    return fetch(this._url + `/cards/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(this._checkError())
  }

  removeCard(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    }).then(this._checkError())
  }

  likeCard(id) {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkError())
  }

  dislikeCard(id) {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkError())
  }

}

export default Api;
