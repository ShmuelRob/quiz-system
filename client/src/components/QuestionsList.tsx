import axios from "axios";
import { useEffect, useState } from "react";
import question from "../models/question";
import AddExamComp from "./AddExamComp";

interface questionsListProps {
  questions: question[];
  questionsSelectedIds: string[];
  setQuestionsSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  goNext: () => void;
}

function QuestionsList(props: questionsListProps) {
  //   const [questions, setQuestions] = useState<question[]>([]);
  //   const [questionsSelected, setQuestionsSelected] = useState<string[]>([]);// id's
  //   const axiosBase = axios.create({baseURL: `${import.meta.env.VITE_SERVER_URL}/questions`});
  //   useEffect(() => {
  // axiosBase.get('/').then((data) => {
  //   setQuestions(data.data);
  // });
  //   }, []);

  const handleQuestions = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.checked) {
      props.setQuestionsSelectedIds((curr) => {
        console.log(curr, props.questions);
        curr.push(props.questions[index].__id);
        return curr;
      });
    } else {
      props.setQuestionsSelectedIds((curr) => {
        console.log(curr);
        return curr.filter((_, i) => i !== index);
      });
    }
    console.log(props.questionsSelectedIds);
  }

  return (
    <>
      {!props.questions ? (
        <p>loading</p>
      ) : (
        <div>
          {props.questions.map((q, i) => (
            <div key={i}>
              {q.title}, {q.description},
              {/* {q.exams.length === 0 ? <button>delete</button> : q.exams.map((q) => `${q}`)} */}
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
