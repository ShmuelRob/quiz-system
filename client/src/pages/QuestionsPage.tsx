import { useState, useEffect } from "react";
import question from "../models/question";
import getData from "../utils/getData";
import { Link } from "react-router-dom";
import deleteData from "../utils/deleteData";

function QuestionsPage() {
  const [questions, setQuestions] = useState<question[]>();
  useEffect(() => {
    getData("questions")
      .then((data) => {
        setQuestions(data as question[]);
      })
      .catch((err) => {
        return <>{err}</>;
      });
  }, []);

  const deleteQuestion = (id: string) => {
    deleteData(`questions/${id}`).then((rd) => {
      if ((rd as string) === "OK") {
        getData("questions").then((data) => {
          setQuestions(data as question[]);
        });
      }
    });
  };

  return (
    <div>
      {questions?.map((q, i) => {
        return (
          <div key={i}>
            {q.title}{" "}
            <Link to={`edit/${q._id}`}>
              <button>edit</button>
            </Link>{" "}
            {q.exams.length === 0 ? (
              <button onClick={(e) => deleteQuestion(q._id)}>delete</button>
            ) : (
              <b>used, cannot delete</b>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default QuestionsPage;
