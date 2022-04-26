require('./userClass')

class userBase{
  constructor(users){
    this.users = users;
    console.log(this.users)
  }
  count(){
    return this.users.length;
  }
  getNames(){
    return this.users.map(user => `${user.getName()}`);
  }
  getIntroductions(){
      return this.users.map( user => `${user.getIntroduction()}`);
  }
  
}