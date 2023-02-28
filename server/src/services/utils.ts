import { getExamTypes, getLanguages, getQuestionType } from '../data/utils.repository';
import mongoose from 'mongoose';

function getLanguagesService() {
    return getLanguages();
}

function getExamTypesService() {
    return getExamTypes();
}

function getQuestionTypeService(id: string) {
    return getQuestionType(new mongoose.Types.ObjectId(id));
}


export {getLanguagesService, getExamTypesService, getQuestionTypeService}
