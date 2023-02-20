import question from './question';

export default interface exam {
    _id: string
    questions: string[],
    language: string,
    examType: string,
    header: string,
    massageOnFail: string,
    massageOnSuccess: string,
    passingGrade: number,
    date: Date,
    isShowResult: boolean,
}