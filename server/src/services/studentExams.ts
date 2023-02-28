import mongoose from 'mongoose';
import { addStudentExam, deleteStudentExam, editStudentExam, getAllStudentExams, getStudentExam, getStudentExamById } from '../data/studentExams.repository';
import studentExam from '../models/interfaces/studentExam.interface';

function getAllStudentExamsService() {
    return getAllStudentExams();
}

function getStudentExamService(studentExam: studentExam): Promise<studentExam> {
    return getStudentExam(studentExam)
}

function getStudentExamByIdService(id: string): Promise<studentExam> {
    return getStudentExamById(new mongoose.Types.ObjectId(id));
}

function addStudentExamService(studentExam: studentExam): Promise<mongoose.Types.ObjectId> {
    let fieldId = new  mongoose.Types.ObjectId();
    score: createScore(studentExam);

    return addStudentExam(studentExam)
}

function createScore(exam: studentExam): number {
    return 0;
}

function editStudentExamService(id: string, studentExam: studentExam){
    return editStudentExam(new mongoose.Types.ObjectId(id), studentExam);
}

function deleteStudentExamService(id: string) {
    return deleteStudentExam( new mongoose.Types.ObjectId(id));
}

export { getAllStudentExamsService, getStudentExamService, getStudentExamByIdService,
    addStudentExamService, editStudentExamService, deleteStudentExamService}
