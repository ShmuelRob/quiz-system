import mongoose from 'mongoose';
import { addStudentExam, deleteStudentExam, editStudentExam, getAllStudentExams, getStudentExam, getStudentExamById } from '../data/studentExams.repository';
import studentExam from '../models/interfaces/studentExam.interface';

function getAllStudentExamsService() {
    return getAllStudentExams();
}

function getStudentExamService(studentExam: studentExam){
    return getStudentExam(studentExam)
}

function getStudentExamByIdService(id: mongoose.Types.ObjectId) {
    return getStudentExamById(id);
}

function addStudentExamService(studentExam: studentExam) {
    return addStudentExam(studentExam)
}

function editStudentExamService(id: mongoose.Types.ObjectId, studentExam: studentExam){
    return editStudentExam(id, studentExam)
}

function deleteStudentExamService(id: mongoose.Types.ObjectId) {
    return deleteStudentExam(id);
}

export { getAllStudentExamsService, getStudentExamService, getStudentExamByIdService,
    addStudentExamService, editStudentExamService, deleteStudentExamService}
