import { Schema, model } from 'mongoose';
import student from '../interfaces/student.interface';

const studentSchema = new Schema<student>({
        firstName: String,
        lastName: String,
        email: String, //(unique)
        id: Number
});

export default model('student', studentSchema);
