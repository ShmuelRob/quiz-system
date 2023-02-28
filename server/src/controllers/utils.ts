import { Request, Response } from 'express';
import { getExamTypesService, getLanguagesService, getQuestionTypeService } from '../services/utils';

async function getLanguagesController(req: Request, res: Response) {
    return res.json(await getLanguagesService());
}

async function getExamTypesController(req: Request, res: Response) {
    return res.json(await getExamTypesService())
}

async function getQuestionTypeController(req: Request, res: Response) {
    const { id } = req.params
    return res.send(await getQuestionTypeService(id));
}

export { getLanguagesController, getExamTypesController, getQuestionTypeController }