import { tryLogin } from '../services/login';
import { Request, Response } from 'express';
import userOutput from '../models/types/userOutput.type';

async function loginController(req: Request, res: Response) {
    const { username, password } = req.body;
    if (!(username && password)) {
        return false;
    }
    const login = await tryLogin(username, password).catch(err => {
        res.status(400).json({ login: false });
    })
    if (login as userOutput) {
        res.status(200).json(login);
    }
}

export { loginController }
