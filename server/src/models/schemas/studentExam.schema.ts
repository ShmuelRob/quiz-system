import mongoose, { Schema, model } from 'mongoose';
import studentExam from '../interfaces/studentExam.interface';

const studentExamSchema = new Schema<studentExam>({
    examId: mongoose.Types.ObjectId,
    studentId: mongoose.Types.ObjectId,
    fieldId: mongoose.Types.ObjectId,
    answers: [[mongoose.Types.ObjectId, String]],
    date: Date,
    score: Number
});

export default model('studentExam', studentExamSchema);
