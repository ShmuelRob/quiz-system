import { addUser, isUserExist } from "../data/users.repository";

function tryRegister(username: string, email: string, password: string): Promise<boolean> {
    return new Promise( async (resolve, reject) => {
        const isUsernameExist = isUserExist(username);
        const isMailExist = isUserExist(email);
        if (await isUsernameExist) {
            reject('username already exists, try to login');
        }
        if (await isMailExist) {
            reject('email already exist, try to login');
        }
        const user = await addUser({username, email, password}).catch(err => {
            resolve(err);
        })
        if (user) {
            resolve(true);
        }
    });
}

export default tryRegister
