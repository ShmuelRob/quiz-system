import mongoose from 'mongoose';
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

function addExamService(exam: exam) {
    return addExam(exam)
}

function editExamService(id: mongoose.Types.ObjectId, exam: exam){
    return editExam(id, exam)
}

function deleteExamService(id: mongoose.Types.ObjectId) {
    return deleteExam(id);
}

export { getAllExamsService, getExamService, getExamByIdService, addExamService, editExamService, deleteExamService}
