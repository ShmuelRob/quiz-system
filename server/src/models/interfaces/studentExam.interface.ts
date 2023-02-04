import mongoose from "mongoose";

export default interface studentExam {
    examId: mongoose.Types.ObjectId,
    studentId: mongoose.Types.ObjectId,
    fieldId: mongoose.Types.ObjectId,
    answers: [mongoose.Types.ObjectId, string][],
    date: Date,
    score: number
}
