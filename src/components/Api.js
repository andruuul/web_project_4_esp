export default class Api {

  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  _checkResponse(res) { 
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
  }

  getProfileInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
  }

  editProfile(name, job) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
  }

  addNewCard(cardData){
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: cardData.name, 
        link: cardData.link
      })
    })
  }

  deleteCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      }})
  }
  


  // likeCard()
  // Para este, necesito hacer "push" al nombre del usuario en el array de "likes" : [] y luego contar su .length? 

  }