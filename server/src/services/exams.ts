import mongoose from 'mongoose';
import {getAllExams, getExam, getExamById, addExam, editExam, deleteExam, } from '../data/exams.repository';
import exam from '../models/interfaces/exam.interface';
import { getExamTypes, getLanguages } from '../data/utils.repository';

function getAllExamsService() {
    return getAllExams();
}

function getExamService(exam: any){
    return getExam(exam as exam)
}

function getExamByIdService(id: string) {
    return getExamById(new mongoose.Types.ObjectId(id));
}

async function addExamService(exam: any) {
    const editedExam = await createExam(exam);
    return addExam(editedExam)
}

async function editExamService(id: string, exam: any){
    const editedExam = await createExam(exam);
    return editExam(new mongoose.Types.ObjectId(id), editedExam)
}

async function createExam(exam: any): Promise<exam> {
    return {
        header: exam.header,
        date: exam.date,
        isShowResult: exam.isShowResult ?? true,
        passingGrade: exam.passingGrade ?? 70,
        massageOnFail: exam.massageOnFail ?? 'you failed the exam',
        massageOnSuccess: exam.massageOnSuccess ?? 'you succeed the exam',
        fieldId: new mongoose.Types.ObjectId(process.env.Field_ID),
        examType: new mongoose.Types.ObjectId(exam.examType || [...await getExamTypes()][0]), 
        language: new mongoose.Types.ObjectId(exam.language || [...await getLanguages()][0]),
        questions: exam.questions.map((q: string) => {
            return new mongoose.Types.ObjectId(q);
        })
    }
}

function deleteExamService(id: string) {
    return deleteExam(new mongoose.Types.ObjectId(id));
}

export { getAllExamsService, getExamService, getExamByIdService, addExamService, editExamService, deleteExamService}
