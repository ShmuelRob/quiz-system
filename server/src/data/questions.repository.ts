import dotenv from 'dotenv';
import mongoose from 'mongoose';
import question from '../models/interfaces/question.interface';
import questionSchema from '../models/schemas/question.schema';

dotenv.config()

mongoose.connect(process.env.MONGO_URL || '', err => {
    if (err) {
        console.log('mongoose is not working: ' + err);
    }
});


function getAllQuestions(): Promise<question[]> {
    return new Promise(async resolve => {
        resolve(await questionSchema.find({}).exec());
    });
}

function getQuestionById(id: mongoose.Types.ObjectId): Promise<question> {
    return new Promise(async (resolve, reject) => {
        const question = await questionSchema.findById(id).exec().catch(err => {
            reject('this id not exist');
        });
        if (question) {
            resolve(question);
        }
    });
}

function addExamToQuestion(questionId: mongoose.Types.ObjectId, examId: mongoose.Types.ObjectId): Promise<void> {
    return new Promise(async (resolve, reject) => {
        const question = await questionSchema.findById(questionId).exec().catch(err => {
            reject(err);
        });
        question?.exams.push(examId);
        questionSchema.findByIdAndUpdate(questionId, { exams: question?.exams }).exec().catch(err => {
            reject(err);
        });
        resolve()
    });
}

function addQuestion(question: question): Promise<question> {
    return new Promise(async resolve => {
        const created = await questionSchema.create(question);
        resolve(created.toObject<question>());
    });
}

function editQuestion(id: mongoose.Types.ObjectId, question: question): Promise<void> {
    return new Promise(async (resolve, reject) => {
        const oldQues = await questionSchema.findOne({ _id: id }).exec().catch(err => {
            reject(err)
        });
        questionSchema.findOneAndUpdate(
            { _id: id },
            {
                title: question.title || oldQues!.title,
                description: question.description || oldQues!.description,
                answers: question.answers || oldQues!.answers,
                correctAnswer: question.correctAnswer || oldQues!.correctAnswer,
                exams: [...question.exams] || [...oldQues!.exams],
                fieldId: question.fieldId || oldQues!.fieldId,
                typeId: question.typeId || oldQues!.typeId
            }
        ).exec().then(data => {

            resolve()
        }).catch(err => {
            reject(err);
        });
    });
}

function getId(question: question): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const questionInDb = await questionSchema.findOne(question).catch(err => {
            reject(err)
        });
        resolve(questionInDb!._id.toString());
    });
}

function deleteQuestion(id: mongoose.Types.ObjectId): Promise<void> {
    return new Promise(async (resolve, reject) => {
        const deleted = await questionSchema.findByIdAndDelete(id).exec().catch(err => {
            reject(err)
        });
        if(deleted) {
            resolve()
        }
    });
}


export { addQuestion, getQuestionById, editQuestion, addExamToQuestion, deleteQuestion, getAllQuestions, getId }
