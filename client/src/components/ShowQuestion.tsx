import React, { useState } from "react";
import { useEffect } from "react";
import getDataWithParams from "../utils/getDataWithParams";
import question from "../models/question";

interface showQuestionProps {
  questionId: string;
}

function ShowQuestion(props: showQuestionProps) {
  const [question, setQuestion] = useState<question>();
  useEffect(() => {
    getDataWithParams("questions/id", props.questionId)
      .then((data) => {
        setQuestion(data as question);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return <div>{question?.title}</div>;
}

export default ShowQuestion;
