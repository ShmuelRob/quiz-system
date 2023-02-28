import dotenv from 'dotenv';
import mongoose from 'mongoose';
import studentExam from '../models/interfaces/studentExam.interface';
import studentExamSchema from '../models/schemas/studentExam.schema';

dotenv.config()

mongoose.connect(process.env.MONGO_URL || '', err => {
    if (err) {
        console.log('mongoose is not working: ' + err);
    }
});


function getAllStudentExams(): Promise<studentExam[]> {
    return new Promise(async (resolve, reject) => {
        const studentExams = await studentExamSchema.find({}).exec().catch(err => {
            reject(err)
        });
        if (studentExams) {
            resolve(studentExams);
        }
    });
}

function getStudentExam(studentExam: studentExam): Promise<studentExam> {
    return new Promise(async (resolve, reject) => {
        const exam = await studentExamSchema.findOne(studentExam).exec().catch(err => {
            reject(err);
        })
        if (exam) {
            resolve(exam);
        }
    });
}

function getStudentExamById(id: mongoose.Types.ObjectId): Promise<studentExam> {
    return new Promise(async (resolve, reject) => {
        const studentExamFounded = await studentExamSchema.findById(id).catch(err => {
            reject('id does not exist')
        });
        if (studentExamFounded) {
            resolve(studentExamFounded);
        }
    });
}

function addStudentExam(studentExam: studentExam): Promise<mongoose.Types.ObjectId> {
    return new Promise(async resolve => {
        const created = await studentExamSchema.create(studentExam);
        resolve(created._id);
    });
}

function editStudentExam(id: mongoose.Types.ObjectId, studentExam: studentExam): Promise<studentExam> {
    return new Promise(async (resolve, reject) => {
        const edited = await studentExamSchema.findByIdAndUpdate(id, studentExam).catch(err => {
            reject(err);
        });
        resolve(edited!.toObject<studentExam>());
    });
}

function deleteStudentExam(id: mongoose.Types.ObjectId): Promise<void> {
    return new Promise(async resolve => {
        studentExamSchema.findByIdAndDelete(id);
        resolve();
    });
}


export { getAllStudentExams, getStudentExam, getStudentExamById, addStudentExam, editStudentExam, deleteStudentExam }
