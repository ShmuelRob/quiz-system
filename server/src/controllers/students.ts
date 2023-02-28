import { Request, Response } from 'express';
import { addStudentService, getStudentService } from '../services/students';

async function addStudentController(req: Request, res: Response) {
    const { student } = req.body;
    const id = await addStudentService(student).catch(err => {
        res.sendStatus(400);
    });
    res.status(201).send(id);
}

async function getStudentController(req: Request, res: Response) {
    const { id } = req.params;
    const studentFromDb = await getStudentService(id).catch(err => {
        res.sendStatus(400);
    });
    res.status(201).json(studentFromDb);
}

export { addStudentController, getStudentController }

