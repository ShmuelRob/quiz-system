import { useParams } from "react-router";
import exam from "../models/exam";
import { useEffect, useState } from "react";
import getData from "../utils/getData";
import StudentSignIn from "../components/studentExam/StudentSignIn";
import ShowStudentExam from "../components/studentExam/ShowStudentExam";
import EndExam from "../components/studentExam/EndExam";
import student from "../models/student";
import postData from "../utils/postData";

function StudentExam() {
  const { examId } = useParams();
  const [exam, setExam] = useState<exam>();
  const [student, setStudent] = useState<string>(''); //id
  const [studentName, setStudentName] = useState<string>(''); //id
  const [level, setLevel] = useState<number>(0);

  const addStudent = (stud: student) => {
    setLevel((curr) => curr + 1);
    postData('students', {
      firstName: stud.firstName,
      lastName: stud.lastName,
      email: stud.email,
      id: stud.id
    }).then(data => {
      setStudent(data as string);
    })
  };

  const checkScore = () => {

  }

  const createStudentExam = (ans: string[][]) => {
    const score  = 3;
    // postData().then(data => {
      return {
        examId: exam?._id,
        studentId: student,
        answers: ans,
        date: Date,
      }
    
  }

  const addAnswers = (ans: string[][]) => {
    console.log(ans);
    const studentExam = createStudentExam(ans);
    // postData();
    setLevel((curr) => curr + 1)
  };

  const signIn = <StudentSignIn setStudent={addStudent} />;
  const showExam = <ShowStudentExam exam={exam!} goNext={addAnswers} />;
  const endExam = <EndExam />;
  const levels = [signIn, showExam, endExam];

  useEffect(() => {
    getData(`exams/${examId}`)
      .then((data) => {
        const ex = data as exam;
        setExam(ex);
      })
      .catch((err) => {
        return <>error: {err}</>;
      });
  }, []);

  if (!exam) {
    return <>error</>;
  }

  return (
    <div>
      welcome {studentName}
      {levels[level]}
    </div>
  );
}

export default StudentExam;
