import { useEffect, useState } from "react";
import QuestionsList from "../components/QuestionsList";
import question from "../models/question";
import getData from "../utils/getData";

function ExamsPage() {
  //   const [questions, setQuestions] = useState<question[]>([]);
  //   const [questionsSelected, setQuestionsSelected] = useState<string[]>([]); // id's

  //   useEffect(() => {
  //     getData('questions').then(data => {
  //         setQuestions(data as question[]);
  //     }).catch(console.error);
  //   }, []);

  return (
    <div>ExamsPage</div>
    );
    {/* //       <QuestionsList questions={questions} questionsSelectedIds={questionsSelected} setQuestionsSelectedIds={setQuestionsSelected} /> */}
}

export default ExamsPage;
