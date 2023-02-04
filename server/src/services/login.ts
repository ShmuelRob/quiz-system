import { isUserExist, getUserByNameOrMail } from "../data/users.repository";
import userOutput from "../models/types/userOutput.type";


async function tryLogin(usernameOrMail: string, password: string): Promise<userOutput> {
    return new Promise(async (resolve, reject) => {
        if (!(usernameOrMail && password)) {
            reject('one or more of the inputs is missing');
        } else if (!await isUserExist(usernameOrMail)) {
            reject('username or email is not exist');
        } else {
            const user = await getUserByNameOrMail(usernameOrMail);
            if (user.password === password) {
                resolve({login: true, username: user.username})
            }
            resolve({login: false, username: undefined});
        }   
    });
}
export { tryLogin }