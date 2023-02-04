import {Request, Response} from 'express';
import tryRegister from '../services/register';

export default async function registerController(req: Request, res: Response): Promise<boolean> {
    const {username, email, password} = req.body;
    return tryRegister(username, email, password);
}
