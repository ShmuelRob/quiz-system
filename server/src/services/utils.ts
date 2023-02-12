import { getExamTypes, getLanguages } from '../data/utils.repository';

function getLanguagesService() {
    return getLanguages();
}

function getExamTypesService() {
    return getExamTypes();
}


export {getLanguagesService, getExamTypesService}
