import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import exam from '../../models/exam';
import getData from '../../utils/getData';
import question from '../../models/question';
import axios from 'axios';
import putData from '../../utils/putData';

function EditQuestions() {
    const {id} = useParams();
  const [exam, setExam] = useState<exam>();
  const [questions, setQuestions] = useState<question[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]); // id's
  const [returnedData, setReturnedData] = useState<string>('');

  useEffect(() => {
    getData(`exams/${id}`).then(data => {
      setExam(data as exam);
    }).catch(console.error);

    getData('questions').then(data => {
        setQuestions(data as question[]);
    }).catch(console.error);
  }, []);

  const handleQuestions = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.checked) {
        setSelectedQuestions((curr) => {
        curr.push(questions[index]._id);
        return curr;
      });
    } else {
        setSelectedQuestions((curr) => {
        return curr.filter((_, i) => i !== index);
      });
    }
  };


  const edit = () => {
    const editedExam = {...exam, questions: [...new Set(selectedQuestions)]}
    putData(`exams/${id}`, {
        id:id,
        exam: editedExam,
      })
      .then(data => {
        console.log(data);
        setReturnedData(data as string);
      });
  }

if (!exam){
    return <>
    error
    </>
}
  return (
    <div>
          {questions.map((q, i) => (
            <div key={i}>
              {q.title}, {q.description}
              <input type="checkbox" onChange={(e) => handleQuestions(e, i)}/>
            </div>
          ))}
          <button onClick={edit}>edit</button>
          {returnedData}
        </div>
  )
}

export default EditQuestions