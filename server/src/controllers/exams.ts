import { Request, Response } from 'express';
// import exam from '../models/interfaces/exam.interface';
import {
    getAllExamsService, getExamService, getExamByIdService,
    addExamService, editExamService, deleteExamService
} from '../services/exams';


async function getAllExamsController(req: Request, res: Response) {
    const exam = await getAllExamsService().catch(err => {
        return res.status(400).send("couldn't add get exams, " + err);
    });
    return res.status(200).json(exam);
}

async function getExamController(req: Request, res: Response) {
    const { exam } = req.body;
    const examOutput = await getExamService(exam).catch(err => {
        return res.status(400).send("couldn't add get exam, " + err);
    });
    return res.status(200).json(examOutput);
}

async function getExamByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const examOutput = await getExamByIdService(id).catch(err => {
        return res.status(400).send("couldn't add get exam, " + err);
    });
    return res.status(200).json(examOutput);
}

async function addExamController(req: Request, res: Response) {
    const { exam } = req.body;
    const examAdded = addExamService(exam).catch(err => {
        res.status(400).send("couldn't add this Exam, " + err);
    });
    if (await examAdded) {
        return res.sendStatus(201);
    }
}

async function editExamController(req: Request, res: Response) {
    const { id, exam } = req.body;
    const edit = editExamService(id, exam).catch(err => {
        return res.status(400).send("couldn't add edit Exam, " + err);
    });
    if (await edit) {
        return res.sendStatus(201);
    }
}

async function deleteExamController(req: Request, res: Response) {
    const { id } = req.params;
    try {
        await deleteExamService(id);
        return res.sendStatus(200);
    } catch (err) {
        return res.status(400).send("couldn't add this Exam, " + err);
    }
}


export {
    addExamController, deleteExamController, getAllExamsController,
    getExamController, getExamByIdController, editExamController
}
