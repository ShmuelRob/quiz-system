import { useEffect, useState } from "react";
import getData from "../utils/getData";
import exam from "../models/exam";
import ShowQuestion from '../components/ShowQuestion';
import deleteData from "../utils/deleteData";
import { Link } from "react-router-dom";
import './examsPage.module.css'

function ExamsPage() {
    const [exams, setExams] = useState<exam[]>([]);
    const studentUrl = `${import.meta.url.split('/')[2]}/student/`;

    useEffect(() => {
      getData('exams').then(data => {
          setExams(data as exam[]);
      }).catch(console.error);
    }, []);

    const deleteExam = (id: string) => {
      deleteData(`exams/${id}`).then(rd => {
        if(rd as string === 'OK') {
          getData('exams').then(data => {
            setExams(data as exam[])
          })
        }
      })
    }


  return (
    <div>Exams list<br/><br/>
    {exams.map((exam, i)=> {
      return <div key={i} >
        <b>title:</b> {exam.header}<br />
        <b>questions:</b> {exam.questions.map((q, i) => {
          return <ShowQuestion questionId={q} key={i}/>
        })}
        <b>passing grade:</b> {exam.passingGrade}<br />
        <code>{studentUrl + exam._id}</code><br />
        {/* replace this to <code>*/}
        <button onClick={e => navigator.clipboard.writeText(`${studentUrl}${exam._id}`)} >copy link</button>
        {/* replace this button to ::after with background img*/}
        <Link to={`/exams/editDetails/${exam._id}`} ><button>edit details</button></Link>
        <Link to={`/exams/editQuestions/${exam._id}`} ><button>edit questions</button></Link> <br />
        <button onClick={ev => deleteExam(exam._id)}>delete</button>
        <br /><br /><br />
        </div>
    })}
    </div>)
}

export default ExamsPage;
