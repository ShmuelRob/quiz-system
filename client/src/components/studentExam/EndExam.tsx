import React from 'react'

interface endExamProps {
  showResult: boolean
  passingGrade: number
  answers: string[][]
}


function EndExam() {

  //TODO! in the server - in post, make it return the ID, then in the student exam 
  //(maybe make the post of the student props right after it come, for speed)
  // then mamah 01 in atoms, one exam in discrate math then maman 11 in mechanics, then one exam in computer science,
  // then check for jobs


  return (
    <div>EndExam</div>
  )
}

export default EndExam