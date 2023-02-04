import mongoose, { Schema, model } from 'mongoose';
import field from '../interfaces/field.interface';

const fieldSchema = new Schema<field>({
    name: String,
    companyId: mongoose.Types.ObjectId
});

export default model('field', fieldSchema);
