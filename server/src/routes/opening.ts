import express from 'express';

const openingRouter = express.Router();



// openingRouter.get('/', (req, res) => {
//     res.send('welcome');
// })

// openingRouter.post('/', (req, res) => {
//     console.log(req.body)
//     if (req.body.user) {
//         return res.redirect('/user')
//     } else {
//         return res.redirect(`/${process.env.ADMIN_SECTOR}`)
//     }
// });



// openingRouter.get('/user', (req, res) => [
//     res.send('work on that...')
// ])



export default openingRouter;