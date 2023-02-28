import { useEffect, useState } from "react";
import question from "../../models/question";
import getData from "../../utils/getData";

interface questionsListProps {
  setQuestionsSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  goNext: () => void;
}

function QuestionsList(props: questionsListProps) {
  const [questions, setQuestions] = useState<question[]>([]);
  useEffect(() => {
    getData("questions")
      .then((data) => {
        setQuestions(data as question[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleQuestions = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.checked) {
      props.setQuestionsSelectedIds((curr) => {
        curr.push(questions[index]._id);
        return curr;
      });
    } else {
      props.setQuestionsSelectedIds((curr) => {
        return curr.filter((_, i) => i !== index);
      });
    }
  };

  return (
    <>
      {!questions ? (
        <p>loading</p>
      ) : (
        <div>
          {questions.map((q, i) => (
            <div key={i}>
              {q.title}, {q.description}
              <input type="checkbox" onChange={(e) => handleQuestions(e, i)} />
            </div>
          ))}
          <button onClick={props.goNext}>next</button>
        </div>
      )}
    </>
  );
}

export default QuestionsList;
