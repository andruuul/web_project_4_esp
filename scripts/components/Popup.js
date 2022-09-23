export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {} //abren y cierran el popup LO MISMO QUE LOS
  //EVT.LSTRS CREO

  close() {} 

  _handleEscClose() {} //almacena la lógica para cerrar el popup con esc
  // YYYYY el área sombreada

  setEventListeners() {
    //aqui puedo definir las constantes y ponerles
    //los multiples event listeners según los botones etc
    //sin pex pq al final se aplican a todos
    //¿Se agregará el ESC aquí con su evt. listener?
  }
}