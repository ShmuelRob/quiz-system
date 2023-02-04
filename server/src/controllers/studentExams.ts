import { Request, Response } from 'express';
import { addStudentExamService, deleteStudentExamService, editStudentExamService, getAllStudentExamsService, getStudentExamByIdService, getStudentExamService } from '../services/studentExams';


async function getAllStudentExamsController(req: Request, res: Response) {
    const exam = await getAllStudentExamsService().catch(err => {
        return res.status(400).send("couldn't add get exams, " + err);
    });
    return res.status(200).json(exam);
}

async function getStudentExamController(req: Request, res: Response) {
    const { exam } = req.body;
    const examOutput = await getStudentExamService(exam).catch(err => {
        return res.status(400).send("couldn't add get exam, " + err);
    });
    return res.status(200).json(examOutput);
}

async function getStudentExamByIdController(req: Request, res: Response) {
    const { id } = req.body;
    const examOutput = await getStudentExamByIdService(id).catch(err => {
        return res.status(400).send("couldn't add get exam, " + err);
    });
    return res.status(200).json(examOutput);
}

async function addStudentExamController(req: Request, res: Response) {
    const { exam } = req.body;
    const examAdded = addStudentExamService(exam).catch(err => {
        return res.status(400).send("couldn't add this Exam, " + err);
    });
    if (await examAdded) {
        return res.sendStatus(201);
    }
}

async function editStudentExamController(req: Request, res: Response) {
    const { id, exam } = req.body;
    const edit = editStudentExamService(id, exam).catch(err => {
        return res.status(400).send("couldn't add edit Exam, " + err);
    });
    if (await edit) {
        return res.sendStatus(201);
    }
}

async function deleteStudentExamController(req: Request, res: Response) {
    const { id } = req.body;
    try {
        const x = await deleteStudentExamService(id);
        return res.sendStatus(200);
    } catch (err) {
        return res.status(400).send("couldn't add this Exam, " + err);
    }
}


export {
    addStudentExamController, deleteStudentExamController, getAllStudentExamsController,
    getStudentExamController, getStudentExamByIdController, editStudentExamController
}
