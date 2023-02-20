import { addQuestion,/* answerQuestion, isQuestionAnswered,*/ getAllQuestions, editQuestion, getId, getQuestionById, addExamToQuestion, deleteQuestion } from '../data/questions.repository';
import question from '../models/interfaces/question.interface';
import mongoose from 'mongoose';

function getAllQuestionsService(): Promise<question[]> {
    return getAllQuestions();
}

function getQuestionByIdService(id: string) {
    return getQuestionById(new mongoose.Types.ObjectId(id));
}

function addQuestionService(input: any): Promise<question> {
    const question: question = {
        fieldId: new mongoose.Types.ObjectId(process.env.Field_ID!),
        title: input.title,
        description: input.description,
        answers: input.answers,
        typeId: getType(input.typeId),
        correctAnswer: input.correctAnswer,
        exams: []
    }
    return addQuestion(question);
}

// function AddExamToQuestionService(questionId: string, examId: string) {
//     return addExamToQuestion(new mongoose.Types.ObjectId(questionId), new mongoose.Types.ObjectId(examId));
// }

function getType(typeId: string): mongoose.Types.ObjectId {
    if (typeId === 'single choice') {
        return new mongoose.Types.ObjectId(process.env.SINGLE_CHOICE!);
    } else if (typeId === 'multiple choice') {
        return new mongoose.Types.ObjectId(process.env.MULTIPLE_CHOICE!);
    } else {
        return new mongoose.Types.ObjectId('')
    }
}

function editQuestionService(id: mongoose.Types.ObjectId, input: any) {
    const newQuestion = {
        title: input.title,
        description: input.description,
        answers: input.answers,
        correctAnswer: input.correctAnswer,
        typeId: getType(input.typeId),
        fieldId: new mongoose.Types.ObjectId(process.env.Field_ID!),
        exams: input.exams
    } as question

    return editQuestion(id, newQuestion)
}

function getIdService(question: question) {
    return getId(question);
}

function deleteQuestionService(id: string) {
    return deleteQuestion(new mongoose.Types.ObjectId(id));
}

/*function answerQuestionService(question: question, answer: string): Promise<void> {
    return answerQuestion(question, answer);    
}*/


export { getQuestionByIdService, addQuestionService, deleteQuestionService, getAllQuestionsService, editQuestionService, getIdService }
