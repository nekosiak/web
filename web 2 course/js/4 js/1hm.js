

function createNewUser() {
    this.firstName=prompt('What\'s your name?');
    this.lastName=prompt('What\'s your last name?');   
    this.getLogin = function(){
        let newLogin = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        return newLogin;
    }
}
let newUserObj = new createNewUser();
alert(`Your login is: ${newUserObj.getLogin()}`);