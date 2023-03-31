class Api {
  constructor(options) {
    // тело конструктора
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: '186e858b-0f86-414d-8c8c-a1408bf9b14d',
    'Content-Type': 'application/json'
  }
});
