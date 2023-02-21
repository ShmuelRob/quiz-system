import question from '../models/question';

interface showStudentQuestionProps {
    question: question
}

function ShowStudentQuestion(props: showStudentQuestionProps) {
  return (
    <div>ShowStudentQuestion
        <h4>{props.question.title}</h4>
        <h2>{props.question.description}</h2>
        {props.question.answers.map(q => {
            return <>
            <input type={props.question.typeId === 'single choice' ? 'radio': 'checkbox'} /> {q}
            </>
        })}
    </div>
  )
}

export default ShowStudentQuestion