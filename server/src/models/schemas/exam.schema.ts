import mongoose, { Schema, model } from 'mongoose';
import exam from '../interfaces/exam.interface';

const examSchema = new Schema<exam>({
    fieldId: mongoose.Types.ObjectId,
    questions: [mongoose.Types.ObjectId],
    language: mongoose.Types.ObjectId,
    examType: mongoose.Types.ObjectId,
    header: String,
    massageOnFail: String,
    massageOnSuccess: String,
    passingGrade: Number,
    date: Date,
    isShowResult: Boolean,
});

export default model('exam', examSchema);


// export default interface exam {
    // fieldId: Schema.Types.ObjectId,
    // questions: Schema.Types.ObjectId[],
    // language: language,
    // examType: examOrder,
    // header: string,
    // massageOnFail: string,
    // massageOnSuccess: string
    // passingGrade: number,
    // date: Date,
    // isShowResult: boolean,
//     //? delivery:
// }

