import questionType from "./questionType.type";

export default interface question {
    _id: string
    title: string,
    description: string,
    typeId: questionType,
    answers: string[],
    correctAnswer: string | string[],
    exams: string[]
}
