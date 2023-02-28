import { Request, Response } from 'express';
import {
    addQuestionService, getAllQuestionsService, editQuestionService,
    getIdService, getQuestionByIdService, deleteQuestionService
} from '../services/questions';


async function getAllQuestionsController(req: Request, res: Response) {
    const users = await getAllQuestionsService().catch(err => {
        return res.status(400).send("couldn't get questions: " + err);
    });
    return res.status(200).json(users);
}

async function getQuestionByIdController(req: Request, res: Response) {
    const { id } = req.params;
    const question = await getQuestionByIdService(id).catch(err => {
        return res.status(400).send("couldn't get question: " + err);
    })
    return res.status(200).json(question);
}

async function addQuestionsController(req: Request, res: Response) {
    const { question } = req.body;
    const questionAdded = addQuestionService(question).catch(err => {
        return res.status(400).send("couldn't add this question: " + err);
    });
    if (await questionAdded) {
        return res.sendStatus(201);
    }
}

async function editQuestionsController(req: Request, res: Response) {
    const { id, question } = req.body;
    try {
        editQuestionService(id, question);
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(400);
    }
}

async function getIdController(req: Request, res: Response) {
    const { question } = req.body;
    const id = getIdService(question).catch(err => {
        return res.status(400).send("couldn't get question: " + err);
    });
    if (await id) {
        return res.status(200).send(id);
    }
}

async function deleteQuestionController(req: Request, res: Response) {
    const { id } = req.params;
    try {
        await deleteQuestionService(id);
        return res.sendStatus(200);
    } catch (err) {
        return res.status(400).send("couldn't delete: " + err);
    }
}

export {
    addQuestionsController, deleteQuestionController, getAllQuestionsController,
    getQuestionByIdController, editQuestionsController, getIdController
}
