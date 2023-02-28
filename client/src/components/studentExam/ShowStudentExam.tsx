import { useState } from 'react';
import exam from '../../models/exam'
import ShowStudentQuestion from './ShowStudentQuestion';

interface showStudentExamProps {
  exam: exam
  goNext: (answers: string[][]) => void
}

function ShowStudentExam(props: showStudentExamProps) {
  const [level, setLevel] = useState<number>(0);
  const [answers, setAnswers] = useState<string[][]>([[]].fill([], 0, props.exam.questions.length - 1));
  const questionsComponents = props.exam.questions.map((q, i) => {
    return <ShowStudentQuestion next={(ans) => goNext(ans, i)} questionId={q} key={i} />
  });

  const goNext = (answer: string[], index: number) =>  {
    setAnswers(curr => {
      let newAnswers = [...curr];
      newAnswers[index] = answer; 
      return newAnswers
    });
    if (level + 1 === props.exam.questions.length){
      let newAnswers = [...answers];
      newAnswers[index] = answer; 
      props.goNext(newAnswers);
    } else {
      setLevel(curr => curr + 1);
    }
  }
  
  return (
    <div>
      question number: {` ${level + 1}/${props.exam.questions.length}`}
      {questionsComponents[level]}
    </div>
  )
}

export default ShowStudentExam