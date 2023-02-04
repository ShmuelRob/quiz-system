import express from 'express';
import {addQuestionsController, /*answerQuestionsController,*/ getAllQuestionsController, editQuestionsController, getIdController} from '../controllers/questions';

const questionsRouter = express.Router();

questionsRouter.get('/', (req, res) => {
    return getAllQuestionsController(req, res)
});

questionsRouter.get('/id', (req, res) => {
    return getIdController(req, res)
});

questionsRouter.post('/', (req, res) => {
    return addQuestionsController(req, res);
});

questionsRouter.put('/edit', (req, res) => {
    return editQuestionsController(req, res);
});

// questionsRouter.get('/', (req, res) => {
//     return getAllQuestionsController(req, res)
// })


/*
questionsRouter.post('/answer', (req, res) => {
    return answerQuestionsController(req, res);
})
*/

export default questionsRouter
