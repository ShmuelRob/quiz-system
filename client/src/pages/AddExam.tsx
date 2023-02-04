import React, { useEffect, useState } from "react";
import AddExamDetails from "../components/AddExamDetails";
import QuestionsList from "../components/QuestionsList";
import question from "../models/question";
import getData from "../utils/getData";

function AddExam() {
  const [questions, setQuestions] = useState<question[]>([]);
  const [title, setTitle] = useState<string>('');
  
  useEffect(() => {
    getData("questions")
      .then((data) => {
        setQuestions(data as question[]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]); // id's
  const [level, setLevel] = useState(0);
  const addDetails = (
    <AddExamDetails goNext={() => setLevel((curr) => curr + 1)} />
  );
  const questionsList = (
    <QuestionsList
      questions={questions}
      questionsSelectedIds={selectedQuestions}
      setQuestionsSelectedIds={setSelectedQuestions}
      goNext={() => setLevel((curr) => curr + 1)}
    />
  );
  const levels = [addDetails, questionsList];
  return (
    <div>
      {level < levels.length
        ? `Add Exam level ${level + 1}/${levels.length}:`
        : "end - add component for that(and remove this string"}
      {levels[level]}
    </div>
  );
}

/**
    fieldId: mongoose.Types.ObjectId,
    questions: [mongoose.Types.ObjectId],
    language: mongoose.Types.ObjectId,
    examType: mongoose.Types.ObjectId,
    header: String,
    massageOnFail: String,
    massageOnSuccess: String,
    passingGrade: Number,
    date: Date,
    isShowResult: Boolean,
 */

export default AddExam;
