import express from 'express';
import {
    addExamController, getExamController, getExamByIdController,
    getAllExamsController, editExamController, deleteExamController
} from '../controllers/exams';

const examsRouter = express.Router();

examsRouter.get('/', (req, res) => {
    return getAllExamsController(req, res)
});

examsRouter.get('/one', (req, res) => {
    return getExamController(req, res)
});

examsRouter.get('/:id', (req, res) => {
    return getExamByIdController(req, res)
});

examsRouter.get('/', (req, res) => {
    return getAllExamsController(req, res)
});

examsRouter.post('/', (req, res) => {
    return addExamController(req, res);
});

examsRouter.put('/edit', (req, res) => {
    return editExamController(req, res);
});

examsRouter.delete('/delete/:id', (req, res) => {
    return deleteExamController(req, res);
});



export default examsRouter
