class UserInfo{

constructor ({name, whoIsThis}){
  this._name = document.querySelector(name);
  this._whoIsThis = document.querySelector(whoIsThis);
}

getUserInfo(){
  return{
    name: this._name.textContent,
    job: this._whoIsThis.textContent
  }
}

setUserInfo(name, job){
  this._name.textContent = name;
  this._whoIsThis.textContent = job;
}

}

export default UserInfo;

