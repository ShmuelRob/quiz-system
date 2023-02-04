import { Schema, model } from 'mongoose';
import company from '../interfaces/company.interface';

const companySchema = new Schema<company>({
    name: String
});

export default model('company', companySchema);
