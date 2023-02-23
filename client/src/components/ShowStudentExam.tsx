import { useState } from 'react';
import exam from '../models/exam'
import ShowStudentQuestion from './ShowStudentQuestion';

interface showStudentExamProps {
  exam: exam
  answers: string[][]
  setAnswers: (ans: string[][]) => void
}


function ShowStudentExam(props: showStudentExamProps) {
  const [level, setLevel] = useState<number>(0)
  const goNext = (answer: string[], index: number) =>  {
    props.answers[index] = answer;
    setLevel(curr => curr + 1);
  }

  const questionsComponents = props.exam.questions.map((q, i) => {
    return <ShowStudentQuestion next={(ans) => goNext(ans, i)} questionId={q} />
  })

  
  return (
    <div>
      question number: {` ${level + 1}/${props.exam.questions.length}`}
      {questionsComponents[level]}
    </div>
  )
}

export default ShowStudentExam