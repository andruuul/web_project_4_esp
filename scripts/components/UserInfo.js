export default class UserInfo{
  constructor ({name, job}) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    const newUsername = document.getElementById('inputUsername');
    const newSubtitle = document.getElementById('inputSubtitle');
      
    newUsername.value = this._name.textContent;
    newSubtitle.value = this._job.textContent;
    
    return  {name: this._name.textContent, job: this._job.textContent} //para qué le pongo return? No sé dónde usarlo en el resto del código, ¿debería servir para setUserInfo?
  }

  setUserInfo() { //Siento que es un método muy "superficial" de cambiar el nombre en el perfil
    this._name.textContent = document.querySelector('#inputUsername').value
    this._job.textContent = document.querySelector('#inputSubtitle').value
  }
  
}