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

function addQuestion(question: question): Promise<question> {
    return new Promise(async resolve => {
        const created = await questionSchema.create(question);
        resolve(created.toObject<question>());
    });
}

function editQuestion(id: mongoose.Types.ObjectId, question: question): Promise<void> {
    return new Promise((resolve, reject) => {
        questionSchema.findByIdAndUpdate(id, question).catch(err => {
            reject(err)
        });
        resolve()
    });
}

function getId(question:question): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const questionInDb = await questionSchema.findOne(question).catch(err => {
            reject(err)
        });
        resolve(questionInDb!._id.toString());
    });
}

// function answerQuestion(question: question, answer: string): Promise<void> {
//     return new Promise(async (resolve, reject) => {
//         const ques = await questionSchema.findOne(question).exec().catch(err => {
//             reject(err);
//         });
//         if (ques) {
//             console.log('entered')
//             const index = ques.answers.findIndex(a => a === answer);
//             if (index === -1) {
//                 reject('answer is not exist')
//             }
//             ques.answersSelected[index] += 1;
//             ques.save();
//             resolve();
//         }
//     });
// }

// function isQuestionAnswered(question: question): Promise<boolean> {
//     return new Promise(async (resolve, reject) => {
//         const ques = await questionSchema.findOne(question).exec().catch(err => {
//             reject(err)
//         });
//         if (ques && ques.answersSelected.some(a => a > 0)) {
            
//         }
//     });
// }


export { addQuestion, editQuestion, /*answerQuestion, isQuestionAnswered,*/ getAllQuestions, getId}
