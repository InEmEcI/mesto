class UserInfo{

constructor ({name, whoIsThis}){
  this._name = document.querySelector(name);
  this._whoIsThis = document.querySelector(whoIsThis);
}

countInfo(){
  return{
    name: this._name.textContent,
    whoIsThis: this._whoIsThis.textContent
  }
}

addInfo(name, whoIsThis){
  this._name.textContent = name;
  this._whoIsThis.textContent = whoIsThis;
}

}

export default UserInfo;

