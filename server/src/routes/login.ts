import express from 'express';
import {loginController} from '../controllers/login';
import registerController from '../controllers/register';

const loginRouter = express.Router();

// loginRouter.get('/', (req, res) => {
//     res.send('login panel');
// });

loginRouter.post('/register', async (req, res) => {
    return registerController(req, res);
    // if (await registerController(req, res)) {
    //     res.status(201).send('registered')
    // }
})

loginRouter.post('/', async (req, res) => {
    return loginController(req, res);
    // const loginOutput = await loginController(req, res).catch(err => {
        // res.send(err);
    // });
    // console.log('after rejected');
    // if (loginOutput) {
        // res.status(200).json({login: true});
    // }
})



export default loginRouter
