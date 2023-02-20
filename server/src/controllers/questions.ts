import { Request, Response } from 'express';
import { addQuestionService, /*answerQuestionService, AddExamToQuestionService, */ getAllQuestionsService, editQuestionService, getIdService, getQuestionByIdService, deleteQuestionService } from '../services/questions';
import question from '../models/interfaces/question.interface';


async function getAllQuestionsController(req: Request, res: Response) {
    const users = await getAllQuestionsService().catch(err => {
        return res.status(400).send("couldn't get questions: " + err);
    });
    return res.status(200).json(users);
}

async function getQuestionByIdController(req: Request, res: Response) {
    // const {id} = req.body
    const id = req.params.id;
    const question = await getQuestionByIdService(id).catch(err => {
        return res.status(400).send("couldn't get question: " + err);
    })
    return res.status(200).json(question);
}

async function addQuestionsController(req: Request, res: Response) {
    const { question } = req.body;
    // console.log(question);
    const questionAdded = addQuestionService(question).catch(err => {
        return res.status(400).send("couldn't add this question: " + err);
    });
    if (await questionAdded) {
        return res.sendStatus(201);
    }
}

// async function AddExamToQuestionController(req: Request, res: Response) {
//     const {questionId, examId} = req.body;
//     await AddExamToQuestionService(questionId, examId).catch(err => {
//         return res.status(400).send("couldn't add edit question, " + err);
//     });
//     return res.sendStatus(200)
// }

async function editQuestionsController(req: Request, res: Response) {
    const {id, question} = req.body;
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
        return res.status(400).send("couldn't get question, " + err);
    });
    if (await id) {
        return res.status(200).send(id);
    }
}

async function deleteQuestionController(req: Request, res: Response) {
    const {id} = req.params;
    const deleted = await deleteQuestionService(id).catch(err => {
        return res.status(400).send("couldn't delete: " + err);
    });
        return res.sendStatus(200)
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
export { addQuestionsController, deleteQuestionController, getAllQuestionsController, getQuestionByIdController, editQuestionsController, getIdController }
