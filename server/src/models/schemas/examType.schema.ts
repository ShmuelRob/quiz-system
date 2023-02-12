import {Schema, model} from 'mongoose';
import examType from '../interfaces/examType.interface';


const examTypeSchema = new Schema<examType>({
    name: String
});

export default model('examType', examTypeSchema);