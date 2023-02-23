import { useEffect, useState } from 'react';
import question from '../models/question';
import getData from '../utils/getData';

interface showStudentQuestionProps {
    questionId: string,
    next: (answers: string[]) => void
}

function ShowStudentQuestion(props: showStudentQuestionProps) {
    const [question, setQuestion] = useState<question>();
    let answers: string[] = [];
    useEffect(() => {
      getData(`questions/id/${props.questionId}`).then(data => {
        setQuestion(data as question);
      })
    }, [])

    const handleQuestions = (
        e: React.ChangeEvent<HTMLInputElement>,
        answer: string
      ) => {
        if (e.target.checked) {
          question!.typeId === 'single choice'
          ? answers = [answer]
          : answers.push(answer);
        } else {
          answers = answers.filter(a => a !== answer);
        }
      }

      const sendQuestion = () => {
        props.next([...new Set(answers)]);
      }

  return (
    <div>ShowStudentQuestion
        <h4>{question?.title}</h4>
        <h2>{question?.description}</h2>
        {question?.answers.map((q, i) => {
            return <div key={i}>
            <input type={question.typeId === 'single choice' ? 'radio': 'checkbox'} onChange={e => handleQuestions(e, q)} /> {q}
            </div>
        })}
        <button onClick={sendQuestion}>next</button>
    </div>
  )
}

export default ShowStudentQuestion
