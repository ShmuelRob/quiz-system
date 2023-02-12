import dotenv from 'dotenv';
import mongoose from 'mongoose';
import languageSchema from '../models/schemas/language.schema';
import language from '../models/interfaces/language.interface';
import examType from '../models/interfaces/examType.interface';
import examTypeSchema from '../models/schemas/examType.schema';

dotenv.config()

mongoose.connect(process.env.MONGO_URL || '', err => {
    if (err) {
        console.log('mongoose is not working: ' + err);
    }
});

function getLanguages(): Promise<language[]> {
    return new Promise(async (resolve, reject) => {
        const languages = await languageSchema.find({}).exec().catch(err => {
            reject(err)
        });
        if (languages) {
            resolve(languages);
        }
    });
}

function getExamTypes(): Promise<examType[]> {
    return new Promise(async (resolve, reject) => {
        const examTypes = await examTypeSchema.find({}).exec().catch(err => {
            reject(err);
        });
        if (examTypes) {
            resolve(examTypes);
        }
    });
}

export { getLanguages, getExamTypes }
