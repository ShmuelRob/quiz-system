import questionType from "./questionType.type";

export default interface question {
    __id: string
    title: string,
    description: string,
    typeId: questionType,
    answers: string[],
    correctAnswer: string | string[],
    exams: string[]
}
