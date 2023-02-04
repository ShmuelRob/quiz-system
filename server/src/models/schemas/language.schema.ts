import { Schema, model} from 'mongoose';
import language from '../interfaces/language.interface';

const languageSchema = new Schema<language>({
    languageName: String
});

export default model('language', languageSchema);
