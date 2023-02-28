import express from 'express';
import {
    getAllStudentExamsController, getStudentExamByIdController, addStudentExamController,
    editStudentExamController, deleteStudentExamController
}
    from '../controllers/studentExams';


const studentExamsRouter = express.Router();

studentExamsRouter.get('/', (req, res) => {
    return getAllStudentExamsController(req, res);
});

studentExamsRouter.get('/:id', (req, res) => {
    return getStudentExamByIdController(req, res);
});

studentExamsRouter.post('/', (req, res) => {
    return addStudentExamController(req, res);
});

studentExamsRouter.put('/:id', (req, res) => {
    return editStudentExamController(req, res);
});

studentExamsRouter.delete('/:id', (req, res) => {
    return deleteStudentExamController(req, res);
});

export default studentExamsRouter
