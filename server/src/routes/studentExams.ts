import express from 'express';
import {
    getAllStudentExamsController, getStudentExamController,
    getStudentExamByIdController, addStudentExamController,
    editStudentExamController, deleteStudentExamController
}
    from '../controllers/studentExams';

const studentExamsRouter = express.Router();

studentExamsRouter.get('/', (req, res) => {
    return getAllStudentExamsController(req, res)
});

studentExamsRouter.get('/one', (req, res) => {
    return getStudentExamController(req, res)
});

studentExamsRouter.get('/id', (req, res) => {
    return getStudentExamByIdController(req, res)
});

studentExamsRouter.get('/', (req, res) => {
    return getAllStudentExamsController(req, res)
});

studentExamsRouter.post('/add', (req, res) => {
    return addStudentExamController(req, res);
});

studentExamsRouter.put('/edit', (req, res) => {
    return editStudentExamController(req, res);
});

studentExamsRouter.delete('/delete', (req, res) => {
    return deleteStudentExamController(req, res);
});



export default studentExamsRouter
