import { useParams } from 'react-router';
import exam from '../models/exam';
import {useEffect, useState} from 'react';
import getData from '../utils/getData';
import StudentSignIn from '../components/StudentSignIn';
import ShowStudentExam from '../components/ShowStudentExam';
import EndExam from '../components/EndExam';
import student from '../models/student';

function StudentExam() {
    const {examId} = useParams();
    const [exam, setExam] = useState<exam>();
    let answers: string[][] = [];
    const setAnswers = (ans: string[][]) => {
      console.log(ans)
    }
    const [student, setStudent] = useState<student>();
    const [level, setLevel] = useState<number>(0);

    const addStudent = (stud: student) => {
      setStudent(stud);
      setLevel(curr => curr + 1);
    }

    const signIn = <StudentSignIn setStudent={addStudent} />
    const showExam = <ShowStudentExam exam={exam!} answers={answers} setAnswers={setAnswers} />
    const endExam = <EndExam />;
    const levels = [signIn, showExam, endExam]

    useEffect(() => {
      getData(`exams/${examId}`).then(data => {
        const ex = data as exam;
        setExam(ex);
        answers.length = ex.questions.length;
        answers.fill([], 0);
        }).catch(err=> {
          return <>error: {err}</>
        })
    }, [])

    if (!exam) {
      return <>error</>
    }

  return (
    <div>welcome {student?.firstName}
    {levels[level]}
    </div>
  )
}

export default StudentExam