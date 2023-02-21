import {useState} from 'react';
import student from '../models/student';

interface studentSignInProps {
  setStudent: (stud: student) => void
}

function StudentSignIn(props: studentSignInProps) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<number>(0);

  const enterStudent = () => {
    const student: student = {
      _id: '',
      firstName,
      lastName,
      email,
      id,
    }
    props.setStudent(student)
  } 
    
  return (
    <div>
      first name: <input type="text" onChange={e => setFirstName(e.target.value)} />
      last name: <input type="text" onChange={e => setLastName(e.target.value)} />
      email: <input type="text" onChange={e => setEmail(e.target.value)} />
      id: <input type="number" onChange={e => setId(Number.parseInt(e.target.value))} />
      <button onClick={enterStudent}>enter to the exam</button>
    </div>
  )
}

export default StudentSignIn