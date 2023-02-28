import express from 'express';
import { addStudentController, getStudentController } from '../controllers/students';


const studentsRouter = express.Router();

studentsRouter.get('/:id', (req, res) => {
    return getStudentController(req, res)
});

studentsRouter.post('/', (req, res) => {
    return addStudentController(req, res);
});

export default studentsRouter
