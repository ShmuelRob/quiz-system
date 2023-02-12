import { useEffect, useState } from "react";
import getData from "../utils/getData";
import language from "../models/language";
import examType from "../models/examType";

interface addExamDetailsProps {
  setTitle: (title: string) => void;
  selectExamType: (selectedType: string) => void;
  selectLanguage: (id: string) => void;
  goNext: () => void;
}

// const [massageOnFail, setMassageOnFail] = useState<string>();
//   const [massageOnSuccess, setMassageOnSuccess] = useState<string>();
//   const [passingGrade, setPassingGrade] = useState<number>();
//   const [showResult, setShowResult] = useState<boolean>();

function AddExamDetails(props: addExamDetailsProps) {
  const [languagesOptions, setLanguagesOptions] = useState<language[]>();
  const [examTypes, setExamTypes] = useState<examType[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      header:{" "}
      <input type="text" onChange={(e) => props.setTitle(e.target.value)} />
      <br />
      order:{" "}
      <select onChange={(e) => props.selectExamType(e.target.value)}>
        {examTypes?.map((et, i) => {
          return (
            <option value={et._id} key={i}>
              {et.name}
            </option>
          );
        })}
      </select>
      <br />
      language:{" "}
      <select onChange={(e) => props.selectLanguage(e.target.value)}>
        {languagesOptions?.map((l, i) => {
          return (
            <option value={l._id} key={i}>
              {l.languageName}
            </option>
          );
        })}
      </select>
      <br />
      <button onClick={props.goNext}>next</button>
    </div>
  );
}

export default AddExamDetails;
