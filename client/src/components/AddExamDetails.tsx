
interface addExamDetailsProps {
  goNext: () => void;
}


function AddExamDetails(props: addExamDetailsProps) {
  return (
    <>
      header: <input type="text" onChange={} />
      <button onClick={props.goNext} >next</button>
    </>
  );
}

export default AddExamDetails;
