import { useParams } from 'react-router';
import exam from '../models/exam';
import {useEffect, useState} from 'react';

function StudentExam() {
    const {examId} = useParams()
    const [exam, setExam] = useState<exam>();

    useEffect(() => {
        
    }, [])

  return (
    <div>StudentExam</div>
  )
}

export default StudentExam