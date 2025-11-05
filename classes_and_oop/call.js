function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // the above called is printed without (this) keyword as well 
                                     // but this helps to assign the username refference
    this.email = email               // wihtout call function is not called
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
