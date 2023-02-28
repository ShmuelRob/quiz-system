import express from 'express';
import { getExamTypesController, getLanguagesController, getQuestionTypeController } from '../controllers/utils';


const utilsRouter = express.Router();

utilsRouter.get('/languages', (req, res) => {
    return getLanguagesController(req, res);
});

utilsRouter.get('/exam-types', (req, res) => {
    return getExamTypesController(req, res);
});

utilsRouter.get('/question-types/:id', (req, res) => {
    return getQuestionTypeController(req, res);
});


export default utilsRouter;