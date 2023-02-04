import { useEffect, useState } from "react";
import axios from "axios";
import question from '../models/question';

function AddExamComp() {
    const [questions, setQuestions] = useState<question[]>([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/questions`).then(data => {
        setQuestions(data.data);
    })
  }, []);

  return <div>{questions.map((q, i) => {
    return <div key={i}>
    {q.title} <button>choose</button>
    </div>
  })}</div>;
}

export default AddExamComp;
