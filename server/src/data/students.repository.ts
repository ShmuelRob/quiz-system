import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentSchema from '../models/schemas/student.schema';
import student from '../models/interfaces/student.interface';


dotenv.config()

mongoose.connect(process.env.MONGO_URL || '', err => {
    if (err) {
        console.log('mongoose is not working: ' + err);
    }
});

function getStudent(id: mongoose.Types.ObjectId): Promise<student> {
    return new Promise(async (resolve, reject) => {
        const student = await studentSchema.findById(id).catch(err => {
            reject(err);
        });
        if (student) {
            resolve(student);
        }
    })
}

function addStudent(student: student): Promise<mongoose.Types.ObjectId> {
    return new Promise(async (resolve, reject) => {
        const created = await studentSchema.create(student).catch(err => {
            reject(err);
        });
        if (created) {
            resolve(created._id);
        }
    });
}

export { getStudent, addStudent }
