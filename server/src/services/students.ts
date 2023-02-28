import mongoose from 'mongoose';
import {addStudent, getStudent} from '../data/students.repository';
import student from '../models/interfaces/student.interface';



function addStudentService(stud: student) {
    return addStudent(stud);
}

function getStudentService(id: string) {
    return getStudent(new mongoose.Types.ObjectId(id))
}

export {addStudentService, getStudentService}