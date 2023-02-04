import { Schema, model } from 'mongoose';
import user from '../interfaces/user.interface';

const userSchema = new Schema<user>({
    username: String,
    email: String,
    password: String
});

export default model('user', userSchema);
