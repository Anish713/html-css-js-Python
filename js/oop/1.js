// ES6

////////////////////////// Class, behind the scene //////////////////////////
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const firstClass = new User("first", "first@gmail.com", "123")

console.log(firstClass.encryptPassword());
console.log(firstClass.changeUsername());

// behind the scene

function UserCheck(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

UserCheck.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
UserCheck.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const otherUser = new User("otherUserr", "otherUser@gmail.com", "245")

console.log(otherUser.encryptPassword());
console.log(otherUser.changeUsername());


