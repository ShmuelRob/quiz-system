import { useEffect, useState } from 'react';
import question from '../../models/question';
import getData from '../../utils/getData';

interface showStudentQuestionProps {
    questionId: string,
    next: (answers: string[]) => void
}

function ShowStudentQuestion(props: showStudentQuestionProps) {
    const [question, setQuestion] = useState<question>();
    const [type, setType] = useState<string>();
    let answers: string[] = [];
    useEffect(() => {
      getData(`questions/${props.questionId}`).then(data => {
        const ques = data as question;
        setQuestion(ques);
        getData(`utils/question-types/${ques.typeId}`).then(data => {
          setType(data as string);
        })
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
        <h2>{question?.title}</h2>
        <h4>{question?.description}</h4>
        {question?.answers.map((q, i) => {
            return <div key={i}>
            <input type={type === 'single choice' ? 'radio': 'checkbox'} onChange={e => handleQuestions(e, q)} /> {q}
            </div>
        })}
        <button onClick={sendQuestion}>next</button>
    </div>
  )
}

export default ShowStudentQuestion
