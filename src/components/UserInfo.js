export default class UserInfo{
  constructor (name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() { 
    return  {name: this._name.textContent, job: this._job.textContent, avatar: this._avatar, id: this._id}
  }

  setUserInfo(newUserName, newSubtitle, avatar, id) {
    this._name.textContent = newUserName;
    this._job.textContent = newSubtitle;
    this._avatar = avatar;
    this._id = id
  }
  
}