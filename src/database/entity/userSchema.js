// Standard requires
const EntitySchema = require('typeorm').EntitySchema;

// Local requires
const User = require('../model/userModel');

module.exports = new EntitySchema({
    tableName: "Users",
    target: User,
    columns: {
        id: {
            primary: true,
            name: 'user_id',
            type: 'int',
            generated: true,
            unique: true
        },
        email: {
            name: 'email',
            type: 'varchar',
            unique: true
        },
        password: {
            name: 'password',
            type: 'varchar',
            unique: true
        },
        fullName: {
            name: 'full_name',
            type: 'varchar'
        },
        country: {
            name: 'country',
            type: 'varchar'
        },
        age: {
            name: 'age',
            type: 'int'
        },
        updatedAt: {
            name: 'updated_at',
            type: 'timestamp',
            updateDate: true
        }
    }
});