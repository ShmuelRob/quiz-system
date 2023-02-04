import mongoose from "mongoose";

export default interface question {
    // companyId: number
    fieldId: mongoose.Types.ObjectId,
    title: string,
    description: string,
    typeId: mongoose.Types.ObjectId,
    answers: string[],
    correctAnswer: string | string[],
    exams: mongoose.Types.ObjectId[]
    // isSingleChoice: boolean,
    // answersSelected: number[],
    // isUsed
}

//TODO ! student exam
