
const axios = require('axios');
const utils = require('../util/Utils');
const typeorm = require('../database/typeorm');
const User = require('../database/model/userModel');


class UserService {

    constructor() {   
    }
    
   static getUsers = async (code) => {
     
        const result = await typeorm.connection
        .getRepository(User)
        .createQueryBuilder("Users")
        .where("Users.user_id = :id", { id: code })
        .getOne();

        if (!result) {
             errors.codeDoesNotExist.attributes[0] = code;
           
             throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
        }
        
        return result;
    }

    static insertUser = async (code) => {
     
        console.log(code);
       let result =  await typeorm.connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { 
                fullName: code.full_name, 
                email: code.email, 
                password: code.password, 
                country:code.country,
                age:code.age
            } 
        ])
        .execute();
   
        if (!result) {

            errors.codeDoesNotExist.attributes[0] = code;
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
        }
        
        return result;
    }

    static updateUserFullName = async (code) => {

        let result =  await typeorm.connection
        .createQueryBuilder()
        .update(User)
        .set({ fullName: code.full_name })
        .where("Users.user_id = :id", { id : code.user_id })
        .execute();
    
        if (!result) {
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
        }
        
        return result;
    }

    static deleteUser = async (code) => {

        const result =  await typeorm.connection
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("Users.user_id = :id", { id : code })
        .execute();
    }
}

module.exports = UserService;
