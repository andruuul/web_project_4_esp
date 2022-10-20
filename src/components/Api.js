class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
      this._authorization = headers.authorization;
      }
  
    getInitialCards() {
      fetch(this._baseUrl+`/cards`, {
          headers: {
            authorization: this._authorization
          }
        })
          .then(res => res.json())
          .then((cardsFromServer) => {
            console.log(cardsFromServer)
            const cardsList = new Section ({ //Ayuda, por favor. Nunca hicimos nada parecido en la plataforma, no sé ni cómo empezar :(
              items: cardsFromServer,        //mis fetch están en index.js, ahí hice que funcionen un poco, pero si necesitan estar en
              renderer: (item) => {          //una clase diferente... entonces no podré usar Section
                const cardReady = createCard(item);
                cardsList.addItem(cardReady);
              },
              },
              elementsGridSection
            );
            cardsList.renderItems();
          })
      // ...
    }
  
    // otros métodos para trabajar con la API
  }
  

  //Pasar esto a index.js?
  const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_02",
    headers: {
      authorization: "c0a099b3-69e1-4897-8731-fc3bd1c460e5",
      "Content-Type": "application/json"
    }
  });