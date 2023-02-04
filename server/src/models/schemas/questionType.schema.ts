import { Schema, model } from 'mongoose';
import questionType from '../interfaces/questionType.interface';

const questionTypeSchema = new Schema<questionType>({
    name: String
});

export default model('questionType', questionTypeSchema);
