import express from 'express';
import {addQuestionsController, /*answerQuestionsController,*/ getAllQuestionsController, editQuestionsController, getIdController, getQuestionByIdController,/*, AddExamToQuestionController*/
deleteQuestionController} from '../controllers/questions';

const questionsRouter = express.Router();

questionsRouter.get('/', (req, res) => {
    return getAllQuestionsController(req, res)
});

questionsRouter.get('/id/:id', (req, res) => {
    return getQuestionByIdController(req, res)
});

questionsRouter.post('/', (req, res) => {
    return addQuestionsController(req, res);
});

questionsRouter.put('/edit', (req, res) => {
    return editQuestionsController(req, res);
});

questionsRouter.delete('/delete/:id', (req, res) => {
    return deleteQuestionController(req, res);
});

// questionsRouter.put('/addExam', (req, res) => {
//     return AddExamToQuestionController(req, res);
// });



// questionsRouter.get('/', (req, res) => {
//     return getAllQuestionsController(req, res)
// })


/*
questionsRouter.post('/answer', (req, res) => {
    return answerQuestionsController(req, res);
})
*/

export default questionsRouter
