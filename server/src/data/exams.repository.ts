import dotenv from 'dotenv';
import mongoose, { Schema } from 'mongoose';
import exam from '../models/interfaces/exam.interface';
import examSchema from '../models/schemas/exam.schema';

dotenv.config()

mongoose.connect(process.env.MONGO_URL || '', err => {
    if (err) {
        console.log('mongoose is not working: ' + err);
    }
});


function getAllExams(): Promise<exam[]> {
    return new Promise(async resolve => {
        resolve(await examSchema.find({}).exec());
    });
}

function getExam(exam: exam): Promise<exam[]> {
    return new Promise(async resolve => {
        resolve(await examSchema.find(exam).exec());
    });
}

function getExamById(id: mongoose.Types.ObjectId): Promise<exam> {
    return new Promise(async (resolve, reject) => {
        const examFounded = await examSchema.findById(id).catch(err => {
            reject('id does not exist')
        });
        if (examFounded) {
            resolve(examFounded);
        }
    });
}

function addExam(exam: exam): Promise<exam> {
    return new Promise(async resolve => {
        const created = await examSchema.create(exam);
        resolve(created.toObject<exam>());
    });
}

function editExam(id: mongoose.Types.ObjectId, exam: exam): Promise<exam> {
    return new Promise(async (resolve, reject) => {
        const edited = await examSchema.findByIdAndUpdate(id, exam).catch(err => {
            reject(err);
        });
        resolve(edited!.toObject<exam>());
    });
}

function deleteExam(id: mongoose.Types.ObjectId): Promise<void> {
    return new Promise(async resolve => {
        examSchema.findByIdAndDelete(id);
        resolve();
    });
}


export { getAllExams, getExam, getExamById, addExam, editExam, deleteExam }
