export default class UserInfo{
    constructor ({name, job}) {
      this._name = name;
      this._job = job;
    }

    getUserInfo() {//devuelve un objeto con información sobre el usuario. Este método será útil para casos en los que es necesario mostrar los datos del usuario en el formulario abierto
        //return {name: this._name; job: this._job; }
    }

    setUserInfo() {//toma los datos del nuevo usuario y los agrega en la página.

    }
    
}