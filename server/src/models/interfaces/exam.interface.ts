import mongoose from 'mongoose';

export default interface exam {
    fieldId: mongoose.Types.ObjectId,
    questions: mongoose.Types.ObjectId[],
    language: mongoose.Types.ObjectId,
    examType: mongoose.Types.ObjectId,
    header: string,
    massageOnFail: string,
    massageOnSuccess: string
    passingGrade: number,
    date: Date,
    isShowResult: boolean,
    //? delivery:
}
