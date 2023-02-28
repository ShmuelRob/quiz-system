import { useState } from "react";
import AddExamDetails from "../components/addExam/AddExamDetails";
import QuestionsList from "../components/addExam/QuestionsList";
import SendExam from "../components/addExam/SendExam";
import postData from "../utils/postData";
import exam from '../models/exam';

function AddExam() {
  const [title, setTitle] = useState<string>("");
  const [language, setLanguage] = useState<string>(''); // id
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]); // id's
  const [examType, setExamType] = useState<string>(''); // id
  const [massageOnFail, setMassageOnFail] = useState<string>('');
  const [massageOnSuccess, setMassageOnSuccess] = useState<string>('');
  const [passingGrade, setPassingGrade] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [examId, setExamId] = useState<string>('');

  const [level, setLevel] = useState(0);
  const addDetails = (
    <AddExamDetails
    setMassageOnFail={setMassageOnFail}
    setMassageOnSuccess={setMassageOnSuccess}
    setPassingGrade={setPassingGrade}
    setShowResult={setShowResult}
      selectExamType={setExamType}
      goNext={() => setLevel((curr) => curr + 1)}
      selectLanguage={setLanguage}
      setTitle={setTitle}
    />
  );

  const createExam = (): exam => {
    return {
      _id: '',
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

  const postExam = async () => {
    return postData('exams', {exam: createExam()});
  }
  const finalNext = () =>{
    postExam().then(data =>{
      setExamId(data as string);
      setLevel((curr) => curr + 1);
    });
  }

  const questionsList = (
    <QuestionsList
      setQuestionsSelectedIds={setSelectedQuestions}
      goNext={() => finalNext()}
    />
  );

  
  

  // const sendExam = <SendExam
  // exam={createExam()}
  // />
  // const levels = [addDetails, questionsList, sendExam];
  const levels = [addDetails, questionsList, <SendExam id={examId}/>];




  return (
    <div>
      {`Add Exam level ${level + 1}/${levels.length}:`}
      {levels[level]}
    </div>
  );
}

export default AddExam;
