export default class UserInfo{
  constructor (name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() { 
    return  {name: this._name.textContent, job: this._job.textContent} //para qué le pongo return? No sé dónde usarlo en el resto del código, ¿debería servir para setUserInfo?
  }

  setUserInfo(newUserName, newSubtitle) { //Siento que es un método muy "superficial" de cambiar el nombre en el perfil
    this._name.textContent = newUserName;
    this._job.textContent = newSubtitle;
  }
  
}