import {Request, Response} from 'express';
import { getExamTypesService, getLanguagesService } from '../services/utils';
import language from '../models/interfaces/language.interface';


async function getLanguagesController(req: Request, res: Response) {
    return res.json(await getLanguagesService());
}

async function getExamTypesController(req: Request, res: Response) {
    return res.json(await getExamTypesService())
}

export {getLanguagesController, getExamTypesController}