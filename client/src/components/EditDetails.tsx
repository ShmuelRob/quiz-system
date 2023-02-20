import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import exam from '../models/exam';
import getData from '../utils/getData';
import getDataWithParams from '../utils/getDataWithParams';
import examType from '../models/examType';
import language from '../models/language';
import axios from 'axios';

function EditDetails() {
  const {id} = useParams();
  const [exam, setExam] = useState<exam>();
  const [header, setHeader] = useState<string>();
  const [examTypes, setExamTypes] = useState<examType[]>([]);
  const [examType, setExamType] = useState<string>(''); // id
  const [languagesOptions, setLanguagesOptions] = useState<language[]>([]);
  const [language, setLanguage] = useState<string>(''); // id
  const [showResult, setShowResult] = useState<boolean>(false);
  const [massageOnFail, setMassageOnFail] = useState<string>('');
  const [massageOnSuccess, setMassageOnSuccess] = useState<string>('');
  const [passingGrade, setPassingGrade] = useState<number>(0);
  const [returnedData, setReturnedData] = useState<string>('');

  useEffect(() => {
    getDataWithParams('exams', id).then(data => {
      setExam(data as exam);
    }).catch(err => {
      console.error(err);
    });

    getData("utils/examtypes")
      .then((data) => {
        setExamTypes(data as examType[]);
      })
      .catch((err) => {
        console.error(err);
      });

      
    getData("utils/languages")
    .then((data) => {
      setLanguagesOptions(data as language[]);
    })
    .catch((err) => {
      console.error(err);
    });

  }, [])

  const edit = () => {
    const edited = createExam();
    axios.put(`${import.meta.env.VITE_SERVER_URL}/exams/edit`, {
      id:id,
      exam: edited,
    })
    .then((data) => {
      setReturnedData(data.statusText);
    });
  }

  const createExam = (): exam => {
    return {
      _id: id ?? '',
      questions: [...exam?.questions ?? []],
      header: header ?? '',
      language: language,
      isShowResult: showResult,
      examType: examType,
      massageOnFail: massageOnFail,
      massageOnSuccess: massageOnSuccess,
      passingGrade: passingGrade,
      date: exam?.date ?? new Date()
    }
  }


  return (
    <div>Edit Details<br />
    header: <input type="text" onChange={e => setHeader(e.target.value)} placeholder={exam?.header ?? ''} /><br />
    exam type: <select onChange={(e) => setExamType(e.target.value)}>
        {examTypes?.map((et, i) => {
          return (
            <option value={et._id} key={i}  >
              {et.name}
            </option>
          );
        })}
      </select><br />
      Show Result?:
      <input type="radio" name="showResult" onChange={() => setShowResult(true)} /> Yes
      <input type="radio" name="showResult" onChange={() => setShowResult(false)} /> No
      <br />
      language:
      <select onChange={(e) => setLanguage(e.target.value)}>
        {languagesOptions?.map((l, i) => {
          return (
            <option value={l._id} key={i}>
              {l.languageName}
            </option>
          );
        })}
      </select>
        <br />
      Massage on fail:
      <input type="text" onChange={(e) => setMassageOnFail(e.target.value)} placeholder={exam?.massageOnFail ?? ''}  />
      <br />
      Massage on success:
      <input type="text" onChange={(e) => setMassageOnSuccess(e.target.value)} placeholder={exam?.massageOnSuccess ?? ''} />
      <br />
      Passing grade:
      <input type="number" onChange={(e) => setPassingGrade(Number.parseInt(e.target.value))} placeholder={exam?.passingGrade.toString() ?? '0'} />
      <br />
      <button onClick={edit}>edit</button>
      <p>{returnedData}</p>
    </div>
  )
}

export default EditDetails