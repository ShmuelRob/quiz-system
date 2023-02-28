import express from 'express';
import {
    addQuestionsController, getAllQuestionsController, editQuestionsController,
    getQuestionByIdController, deleteQuestionController
} from '../controllers/questions';


const questionsRouter = express.Router();

questionsRouter.get('/', (req, res) => {
    return getAllQuestionsController(req, res)
});

questionsRouter.get('/:id', (req, res) => {
    return getQuestionByIdController(req, res)
});

questionsRouter.post('/', (req, res) => {
    return addQuestionsController(req, res);
});

questionsRouter.put('/:id', (req, res) => {
    return editQuestionsController(req, res);
});

questionsRouter.delete('/:id', (req, res) => {
    return deleteQuestionController(req, res);
});

export default questionsRouter
