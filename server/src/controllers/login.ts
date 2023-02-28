import { tryLogin } from '../services/login';
import { Request, Response } from 'express';
import userOutput from '../models/types/userOutput.type';
import tryRegister from '../services/register';

async function loginController(req: Request, res: Response) {
    const { username, password } = req.body;
    if (!(username && password)) {
        return res.status(400).json({ login: false });
    }
    const login = await tryLogin(username, password).catch(err => {
        res.status(400).json({ login: false });
    })
    if (login as userOutput) {
        res.status(200).json(login);
    }
}

async function registerController(req: Request, res: Response) {
    const { username, email, password } = req.body;
    return await tryRegister(username, email, password) ? res.send(): res.send();
}

export { registerController, loginController }
