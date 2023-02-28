import { Request, Response } from 'express';
import {
    getAllExamsService, getExamService, getExamByIdService,
    addExamService, editExamService, deleteExamService
} from '../services/exams';


async function getAllExamsController(req: Request, res: Response) {
    const exams = await getAllExamsService().catch(err => {
        return res.status(400).send("couldn't add get exams: " + err);
    });
    return res.status(200).json(exams);
}

async function getExamController(req: Request, res: Response) {
    const { exam } = req.body;
    const examOutput = await getExamService(exam).catch(err => {
        return res.status(400).send("couldn't get this exams: " + err);
    });
    return res.status(200).json(examOutput);
}

async function getExamByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const examOutput = await getExamByIdService(id).catch(err => {
        return res.status(400).send("couldn't get this exam: " + err);
    });
    return res.status(200).json(examOutput);
}

async function addExamController(req: Request, res: Response) {
    const { exam } = req.body;
    const examId = await addExamService(exam).catch(err => {
        return res.status(400).send("couldn't add this exam: " + err);
    });
    if (examId) {
        return res.status(201).send(examId);
    }
}

async function editExamController(req: Request, res: Response) {
    const { id } = req.params;
    const { exam } = req.body;
    const edit = editExamService(id, exam).catch(err => {
        return res.status(400).send("couldn't edit this exam: " + err);
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
        return res.status(400).send("couldn't delete this Exam: " + err);
    }
}


export {
    addExamController, deleteExamController, getAllExamsController,
    getExamController, getExamByIdController, editExamController
}
