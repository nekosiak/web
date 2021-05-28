

function createNewUser() {
    this.firstName=prompt('What\'s your name?');
    this.lastName=prompt('What\'s your last name?');   
    this.birthday=prompt('What\'s your age? input dd.mm.yyyy');    
    
    this.getLogin = function(){
        let newLogin = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        return newLogin;
    }
    this.getAge = function(){
        let Age = this.birthday.charAt(6) + this.birthday.charAt(7)+this.birthday.charAt(8)+this.birthday.charAt(9);
        let newAge=2021-Age;
        return newAge;
    }
    this.getPassword = function(){
        let Age=this.birthday.charAt(6) + this.birthday.charAt(7)+this.birthday.charAt(8)+this.birthday.charAt(9);
        let newPassword = this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase()+Age;
        return newPassword;
    }
}
let newUserObj = new createNewUser();
alert(`Your login is: ${newUserObj.getLogin()}`);
alert(`Your age is: ${newUserObj.getAge()}`);
alert(`Your password is: ${newUserObj.getPassword()}`);