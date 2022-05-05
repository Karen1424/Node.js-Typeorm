const typeorm = require('./typeorm');
const User = require('./model/userModel.js');
const objectValidation = require('../validation/objectValidation');
const baseCodes = require('../../baseCodesEmojis');

run = async () => {
    
    let count = 0, exists, code;
  
    for (i = 0; i < baseCodes.length; i++) {
        code = baseCodes[i];
        if (code.match(objectValidation.UserNftCodePattern)){
            exists = await typeorm.connection.getRepository(User).findOne({ code });
            if (exists) {
                console.log(`${code} already exists!`);
                continue;
            }
            let news = new User(code);
            await typeorm.connection.getRepository(User).save(news);
            count++;
        } else {
            console.log(`${code} has been skipped!`);
        }
    }

    await typeorm.connection.close();   
    console.log(`***** ${count} codes have been inserted! *****`)
}

try {
    run();
} catch (error) {
    console.log(error);
}
