const validator = require("email-validator");

class Validator {

    constructor() {    
    }

    static checkEmail(email) {

        if(!validator.validate(email)) {

            return new Error("Invalid Email");
        }
        return true;
    }

    static checkPassword(password) {

        if(password.lenght < 6) {

            return new Error("Password mast be latest at 6 charackters !!!");
        }
        return true;
    }
}


module.exports = Validator;