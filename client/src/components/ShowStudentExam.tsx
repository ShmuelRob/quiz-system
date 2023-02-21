import React from 'react'
import exam from '../models/exam'

interface showStudentExamProps {
  exam: exam
  answers: string[][]
}


function ShowStudentExam(props: showStudentExamProps) {
  const numOfQuestions = props.answers;
  
  
  return (
    <div>ShowStudentExam</div>
  )
}

export default ShowStudentExam