import mongoose, { Schema, model} from 'mongoose';
import question from '../interfaces/question.interface';

const questionSchema = new Schema<question>({
    fieldId: mongoose.Types.ObjectId,
    title: String,
    description: String,
    typeId: mongoose.Types.ObjectId,
    answers: [String],
    correctAnswer: [String] || String,
    exams: [mongoose.Types.ObjectId],
});

export default model('question', questionSchema);
