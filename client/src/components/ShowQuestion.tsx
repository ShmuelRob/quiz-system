import { useState } from "react";
import { useEffect } from "react";
import question from "../models/question";
import getData from "../utils/getData";

interface showQuestionProps {
  questionId: string;
}

function ShowQuestion(props: showQuestionProps) {
  const [question, setQuestion] = useState<question>();
  useEffect(() => {
    getData(`questions/${props.questionId}`)
      .then((data) => {
        setQuestion(data as question);
      })
      .catch(console.error);
  }, []);
  return <div>{question?.title}</div>;
}

export default ShowQuestion;
