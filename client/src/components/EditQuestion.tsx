import { useParams } from "react-router";
import { ChangeEvent, useEffect, useState } from "react";
import question from "../models/question";
import getData from "../utils/getData";
import axios from "axios";

function EditQuestion() {
  const { id } = useParams();
  const [question, setQuestion] = useState<question>();
  

  const [isSingleChoice, setIsSingleChoice] = useState<boolean>(false);
  const [numOfAnswers, setNumOfAnswers] = useState<number>(question?.answers.length || 3);
  const [title, setTitle] = useState<string>(question?.title || '');
  const [description, setDescription] = useState<string>(question?.description || '');
  const [answers, setAnswers] = useState<string[]>(
    [...question?.answers ||
    Array(numOfAnswers).fill("")]
  );
  const [correctAnswer, setCorrectAnswer] = useState<number>(0); // the index
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]); // the index
  const [returnedData, setReturnedData] = useState<string>("");

  useEffect(() => {
    getData(`questions/id/${id}`)
      .then((q) => {
        const ques = q as question
        setQuestion(ques);
        setTitle(ques.title);
        setDescription(ques.description);
        setAnswers(ques.answers)
        // console.log(ques.correctAnswer)
        if (ques.correctAnswer.length === 1) {
            setCorrectAnswer(ques.answers.findIndex(q => q === ques.correctAnswer[0]));
            setIsSingleChoice(true);
        } else {
            const answers = ques.correctAnswer as string[];
            const indexes = answers.map(a => answers.findIndex(q => q === a));
            setCorrectAnswers(indexes);
            setIsSingleChoice(false);
        }
        // console.log(correctAnswer)
        // console.log(correctAnswers)
        // console.log(createQuestion())
      })
      .catch((err) => {
        return <div>error: {err}</div>;
      });

  }, []);


  const send = () => {
    const questionToAdd = createQuestion();
    axios.put(`${import.meta.env.VITE_SERVER_URL}/questions/edit`, {
        id:id,
        question: questionToAdd,
      })
      .then((data) => {
        setReturnedData(data.statusText);
      });
  };

  const createQuestion = () => {
    return {
      title: title,
      description: description,
      typeId: isSingleChoice ? "single choice" : "multiple choice",
      answers: answers,
      correctAnswer: isSingleChoice
        ? answers[correctAnswer]
        : [...new Set(correctAnswers)].map((n) => {
            return answers[n];
          }),
      exams: [],
    };
  };

  const updateAnswer = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleCorrectAnswers = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isSingleChoice) {
      setCorrectAnswer(index);
    } else if (e.target.checked) {
      if (correctAnswers.some((n) => n === index)) {
        return;
      }
      setCorrectAnswers((current) => {
        let newArr = current;
        newArr.push(index);
        return newArr;
      });
    } else {
      setCorrectAnswers((current) => {
        let newArr = current;
        newArr = newArr.filter((n) => n !== index);
        return newArr;
      });
    }
  };

  const setQuestionType = () => {
    if (isSingleChoice) {
      setCorrectAnswers([correctAnswer]);
    } else if (correctAnswers.length === 0) {
      setCorrectAnswer(
        correctAnswers.reduce((prev, curr) => {
          return prev > curr ? prev : curr;
        }, 0)
      );
    }
    setIsSingleChoice((currentChoice) => !currentChoice);
  };

  const removeAnswers = () => {
    setCorrectAnswers((curr) =>
      curr.filter((a) => {
        return a !== numOfAnswers;
      })
    );
    if (correctAnswer === numOfAnswers) {
      setCorrectAnswer(0);
    }
    setNumOfAnswers((currentNum) => currentNum - 1);
  };

  return (
    <div>

{question?._id}


      <button onClick={() => setQuestionType()}>
        change to: {isSingleChoice ? "multiple choices" : "single choice"}
      </button>
      <br />
      title:
      <input
        type="text"
        value={title}
        placeholder={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      description:
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      {[...Array(numOfAnswers)].map((x, i) => {
        return (
          <div key={i}>
            answer:
            <input
              type="text"
              value={answers[i]}
              onChange={(e) => updateAnswer(e, i)}
            />
            is right:
            <input
              name="answer"
              type={isSingleChoice ? "radio" : "checkbox"}
              onChange={(e) => handleCorrectAnswers(e, i)}
            />
            <br />
          </div>
        );
      })}
      <button onClick={() => setNumOfAnswers((currentNum) => currentNum + 1)}>
        add answer
      </button>
      <button onClick={removeAnswers}>remove answer</button>
      <br />
      <button onClick={send}>edit Question</button>
      <p>{returnedData}</p>
    </div>
  );
}


export default EditQuestion;
