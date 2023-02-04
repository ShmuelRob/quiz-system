import express from 'express';
// import {isAuthorize} from '../controllers/login';

const adminRouter = express.Router();


// adminRouter.get('/', (req, res) => {
    // if (!isAuthorize) {
        // res.redirect('/login');
    // } else {
        // res.redirect(`/panel`);
    // }
// });

// adminRouter.get('/panel', (req, res) => {
//     res.send('panel!!!');
// });




export default adminRouter