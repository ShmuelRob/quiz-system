import { Request, Response } from 'express';
import { addQuestionService, /*answerQuestionService,*/ getAllQuestionsService, editQuestionService, getIdService } from '../services/questions';
import question from '../models/interfaces/question.interface';


async function getAllQuestionsController(req: Request, res: Response) {
    const users = await getAllQuestionsService();
    return res.status(200).json(users)
}

async function addQuestionsController(req: Request, res: Response) {
    const { question } = req.body;
    // console.log(question);
    const questionAdded = addQuestionService(question).catch(err => {
        return res.status(400).send("couldn't add this question, " + err);
    });
    if (await questionAdded) {
        return res.sendStatus(201);
    }
}

async function editQuestionsController(req: Request, res: Response) {
    const {id, question} = req.body;
    const edit = editQuestionService(id, question).catch(err => {
        return res.status(400).send("couldn't add edit question, " + err);
    });
    if (await edit) {
        return res.sendStatus(201);
    }
}

async function getIdController(req: Request, res: Response) {
    const { question } = req.body;
    const id = getIdService(question).catch(err => {
        return res.status(400).send("couldn't get question, " + err);
    });
    if (await id) {
        return res.status(200).send(id);
    }
}

/*
async function answerQuestionsController(req: Request, res: Response) {
    const { question, answer } = req.body;
    answerQuestionService(question, answer).catch(err => {
        return res.status(400).send("couldn't answer, " + err)
    });
    res.sendStatus(201);
}
*/
export { addQuestionsController, /*answerQuestionsController,*/ getAllQuestionsController, editQuestionsController, getIdController }
