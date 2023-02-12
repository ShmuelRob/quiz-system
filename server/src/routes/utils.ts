import express from 'express';
import { getExamTypesController, getLanguagesController } from '../controllers/utils';

const utilsRouter = express.Router();

utilsRouter.get('/languages', (req, res) => {
    return getLanguagesController(req, res)
});

utilsRouter.get('/examtypes', (req, res) => {
    return getExamTypesController(req, res)
});



export default utilsRouter;