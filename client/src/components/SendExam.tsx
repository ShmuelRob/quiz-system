import { Link } from "react-router-dom";

function SendExam() {
  return (
    <div>
      this exam was added to the system!
      <br />
      <Link to='exams'>check here to see the exams</Link>
    </div>
  );
}

export default SendExam;
