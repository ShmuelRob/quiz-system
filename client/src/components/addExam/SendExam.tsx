import { Link } from "react-router-dom";

interface sendExamProps {
  id: string
}

function SendExam(props: sendExamProps) {
  const studentUrl = `${import.meta.url.split('/')[2]}/student/`;

  return (
    <div>
      this exam was added to the system!<br />
      <code>{studentUrl + props.id}</code>
      <br />
      <Link to='exams'>check here to see the exams</Link>
    </div>
  );
}

export default SendExam;
