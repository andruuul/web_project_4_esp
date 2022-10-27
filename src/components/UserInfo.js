export default class UserInfo{
  constructor (name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() { 
    return  {name: this._name.textContent, job: this._job.textContent, id: this._id}
  }

  setUserInfo(newUserName, newSubtitle, id) {
    this._name.textContent = newUserName;
    this._job.textContent = newSubtitle;
    this._id = id
  }
  
}