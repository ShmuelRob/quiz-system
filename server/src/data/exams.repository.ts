import dotenv from 'dotenv';
import mongoose from 'mongoose';
import exam from '../models/interfaces/exam.interface';
import examSchema from '../models/schemas/exam.schema';
import { addExamToQuestion } from './questions.repository';
import { getExamTypes, getLanguages } from './utils.repository';

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
        created.questions.forEach(async q => {
            const questionId = new mongoose.Types.ObjectId(q);
            await addExamToQuestion(questionId, created._id);
        })
        resolve(created.toObject<exam>());
    });
}

function editExam(id: mongoose.Types.ObjectId, exam: exam): Promise<exam> {
    return new Promise(async (resolve, reject) => {
        const oldExam = await examSchema.findOne({_id: id}).exec().catch(err => {
            reject(err);
        });
        const edited = await examSchema.findByIdAndUpdate(id, {
            header: exam.header || oldExam!.header,
            date: exam.date || oldExam!.date,
            isShowResult: exam.isShowResult || oldExam!.isShowResult,
            fieldId: process.env.Field_ID,
            examType: exam.examType || [...await getExamTypes()][0], 
            language: exam.language || [...await getLanguages()][0],
            passingGrade: exam.passingGrade || oldExam!.passingGrade,
            massageOnFail: exam.massageOnFail || oldExam!.massageOnFail,
            massageOnSuccess: exam.massageOnSuccess || oldExam!.massageOnSuccess,
            questions: [...exam.questions || []]
            
        }).catch(err => {
            reject(err);
        });
        resolve(edited!.toObject<exam>());
    });
}

function deleteExam(id: mongoose.Types.ObjectId): Promise<void> {
    return new Promise(async (resolve, reject) => {
        const deleted = await examSchema.findByIdAndDelete(id).exec().catch(err => {
            reject(err)
        });
        if(deleted) {
            resolve()
        }
    });
}


export { getAllExams, getExam, getExamById, addExam, editExam, deleteExam }
