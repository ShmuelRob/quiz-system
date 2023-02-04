import { describe, test, expect } from "vitest";
import { addQuestion, /*answerQuestion, isQuestionAnswered*/ } from '../questions.repository';
import question from '../../models/interfaces/question.interface';
import mongoose from "mongoose";

const title = 'test question';
const answers = [
    'test 1',
    'test 2',
    'test 3'
];
const correctAnswer = 'test 1';
const q: question = {
    title,
    answers,
    correctAnswer,
    exams: [],
    fieldId: new mongoose.Types.ObjectId(''),
    description: "",
    typeId: new mongoose.Types.ObjectId(''),
};


describe('add questions', () => {
    test('should add question', async () => {
        console.log('entered');
        expect(addQuestion(q)).resolves;
    });
});

// describe('answer questions', () => {
//     test('should answer the question, the correct answer', () => {
//         expect(answerQuestion(q, correctAnswer)).resolves;
//     });
//     test('should answer the question, wrong answer', () => {
//         expect(answerQuestion(q, 'test2')).resolves;
//     });
//     test('should reject, answer does not exist', () => {
//         expect(answerQuestion(q, 'fail')).rejects.toThrow(/exist/);
//     });
//     test('should reject, question does not exist', () => {
//         const newQuestion: question = {
//             title: 'test fail',
//             answers: [
//                 'this is going to fail'
//             ],
//             correctAnswer: 'fail',
//             exams: [],
//             fieldId: 1,
//             description: "",
//             typeId: 1,
//         };
//         expect(answerQuestion(newQuestion, 'test2')).rejects.toThrow(/exist/);
//     });
// });

// describe.skip('is question answered', () => {
//     test('on question which answered', () => {
//         // expect()
//     });
//     test('on question which not answered', () => {

//     });
//     test('on question which not exist', () => {

//     });
// });


