import mongoose from 'mongoose';
import dotenv from 'dotenv';
import user from '../models/interfaces/user.interface';
import userSchema from '../models/schemas/user.schema';


dotenv.config()

mongoose.connect(process.env.MONGO_URL || '', err => {
    if (err) {
        console.log('mongoose is not working: ' + err);
    }
});


function addUser(user: user): Promise<user> {
    return new Promise(async (resolve, reject) => {
        const byUsername = isUsernameExist(user.username);
        const byEmail = isMailExist(user.email);
        if (await byUsername) {
            reject('username already exist');
        } else if (await byEmail) {
            reject('email already exist');
        } else {
            resolve(userSchema.create(user));
        }
    });
}

function getUserByNameOrMail(usernameOrEmail: string): Promise<user> {
    return new Promise(async (resolve, reject) => {
        const userByName = await userSchema.findOne({username: usernameOrEmail}).exec();
        const userByMail = await userSchema.findOne({email: usernameOrEmail}).exec();
        if (userByName) {
            const {username, email, password} = userByName;
            resolve({username, email, password});
        } else if (userByMail) {
            const {username, email, password} = userByMail;
            resolve({username, email, password});
        } else {
            reject('user is not exist');
        }
    });
}

function getUser(userToFind: user): Promise<user> {
    return new Promise(async (resolve, reject) => {
        const userInDb = await userSchema.findOne(userToFind).exec();
        if (userInDb) {
            const { username, email, password } = userInDb;
            resolve({ username, email, password })
        } else {
            reject('user is not exist');
        }
    });
}

function isUsernameExist(username: string): Promise<boolean> {
    return new Promise(async resolve => {
        const output = await userSchema.findOne({ username }).exec();
        if (output) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

function isMailExist(email: string): Promise<boolean> {
    return new Promise(async resolve => {
        const output = await userSchema.findOne({ email }).exec();
        if (output) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

function isUserExist(usernameOrMail: string): Promise<boolean> {
    return new Promise(async resolve => {
        const byUsername = isUsernameExist(usernameOrMail);
        const byEmail = isMailExist(usernameOrMail);
        if (!await byEmail && !await byUsername) {
            resolve(false);
        }
        resolve(true);
    });
}


export { addUser, isUserExist, getUser, getUserByNameOrMail }
