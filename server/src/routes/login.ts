import express from 'express';
import { registerController, loginController } from '../controllers/login';


const loginRouter = express.Router();

loginRouter.post('/register', async (req, res) => {
    return registerController(req, res);
})

loginRouter.post('/', async (req, res) => {
    return loginController(req, res);
})

export default loginRouter
