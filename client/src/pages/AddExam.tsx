import { useState } from "react";
import AddExamDetails from "../components/AddExamDetails";
import QuestionsList from "../components/QuestionsList";

function AddExam() {
  const [title, setTitle] = useState<string>("");
  const [language, setLanguage] = useState<string>(); // id
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]); // id's
  const [examType, setExamType] = useState<string>(); // id
  const [massageOnFail, setMassageOnFail] = useState<string>();
  const [massageOnSuccess, setMassageOnSuccess] = useState<string>();
  const [passingGrade, setPassingGrade] = useState<number>();
  const [showResult, setShowResult] = useState<boolean>();

  const [level, setLevel] = useState(0);
  const addDetails = (
    <AddExamDetails
      selectExamType={setExamType}
      goNext={() => setLevel((curr) => curr + 1)}
      selectLanguage={setLanguage}
      setTitle={setTitle}
    />
  );
  const questionsList = (
    <QuestionsList
      setQuestionsSelectedIds={setSelectedQuestions}
      goNext={() => setLevel((curr) => curr + 1)}
    />
  );
  const levels = [addDetails, questionsList];

  const createExam = () => {
    return {
      questions: selectedQuestions,
      language,
      examType,
      header: title,
      massageOnFail,
      massageOnSuccess,
      passingGrade,
      date: new Date(),
      isShowResult: showResult,
    };
  };

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
