import mongoose, { Mongoose } from 'mongoose';
import {getAllExams, getExam, getExamById, addExam, editExam, deleteExam, } from '../data/exams.repository';
import exam from '../models/interfaces/exam.interface';

function getAllExamsService() {
    return getAllExams();
}

function getExamService(exam: exam){
    return getExam(exam)
}

function getExamByIdService(id: mongoose.Types.ObjectId) {
    return getExamById(id);
}

function addExamService(exam: any) {
    const editedExam: exam = {
        ...exam, 
        examType: new mongoose.Types.ObjectId(exam.examType), 
        language: new mongoose.Types.ObjectId(exam.language),
        questions: exam.questions.map((q: string) => {
            return new mongoose.Types.ObjectId(q);
        })
    }
    return addExam(editedExam)
}

function editExamService(id: mongoose.Types.ObjectId, exam: exam){
    return editExam(id, exam)
}

function deleteExamService(id: mongoose.Types.ObjectId) {
    return deleteExam(id);
}

export { getAllExamsService, getExamService, getExamByIdService, addExamService, editExamService, deleteExamService}
