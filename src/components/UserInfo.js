export default class UserInfo{
  constructor (name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() { 
    return  {name: this._name.textContent, job: this._job.textContent}
  }

  setUserInfo(newUserName, newSubtitle) {
    this._name.textContent = newUserName;
    this._job.textContent = newSubtitle;
  }
  
}