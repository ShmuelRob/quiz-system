import { addQuestion,/* answerQuestion, isQuestionAnswered,*/ getAllQuestions, editQuestion, getId } from '../data/questions.repository';
import question from '../models/interfaces/question.interface';
import mongoose from 'mongoose';

function getAllQuestionsService(): Promise<question[]> {
    return getAllQuestions();
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

function getType(typeId: string): mongoose.Types.ObjectId {
    if (typeId === 'single choice') {
        return new mongoose.Types.ObjectId(process.env.SINGLE_CHOICE!);
    } else if (typeId === 'multiple choice') {
        return new mongoose.Types.ObjectId(process.env.MULTIPLE_CHOICE!);
    } else {
        return new mongoose.Types.ObjectId('')
    }
}

function editQuestionService(id: mongoose.Types.ObjectId, question: question) {
    return editQuestion(id, question)
}

function getIdService(question: question) {
    return getId(question);
}

/*function answerQuestionService(question: question, answer: string): Promise<void> {
    return answerQuestion(question, answer);    
}*/


export { addQuestionService, /*answerQuestionService,*/ getAllQuestionsService, editQuestionService, getIdService }
