import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import question from '../models/question';

function AddQuestion() {
  const [isSingleChoice, setIsSingleChoice] = useState<boolean>(false);
  const [numOfAnswers, setNumOfAnswers] = useState<number>(3);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>(
    Array(numOfAnswers).fill("")
  );
  const [correctAnswer, setCorrectAnswer] = useState<number>(0); // the index
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]); // the index
  const [returnedData, setReturnedData] = useState<string>("");

  const send = () => {
    const questionToAdd = createQuestion();
    console.log(questionToAdd);
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/questions`, {
        question: questionToAdd,
      })
      .then((data) => {
        console.log(data);
        setReturnedData(data.statusText);
        console.log(returnedData);
      });
  };

  const createQuestion = () => {
    return {
      title: title,
      description: description,
      typeId: isSingleChoice ? "single choice" : "multiple choice",
      answers: answers,
      correctAnswer:
      isSingleChoice ? answers[correctAnswer] : [...new Set(correctAnswers)].map((n) => {
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
      if (correctAnswers.some(n => n === index)) {
        return;
      }
      setCorrectAnswers((current) => {
        console.log(current);
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
      // console.log(correctAnswers);
    } else if (correctAnswers.length === 0) {
      setCorrectAnswer(correctAnswers.reduce((prev, curr) => {
        return prev > curr ? prev: curr;
      }, 0));
      console.log(correctAnswers);
    }
    setIsSingleChoice((currentChoice) => !currentChoice);
  };

  const removeAnswers = () => {
    setCorrectAnswers(curr => curr.filter(a => {
      return a !== numOfAnswers;
    }));
    if (correctAnswer === numOfAnswers) {
      setCorrectAnswer(0);
    }
    setNumOfAnswers((currentNum) => currentNum - 1);

  }

  return (
    <div>
      <button
        onClick={() => setQuestionType()}
      >
        change to: {isSingleChoice ? "multiple choices" : "single choice"}
      </button>
      <br />
      title:
      <input
        type="text"
        value={title}
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
      <button onClick={removeAnswers}>
        remove answer
      </button>
      <br />
      <button onClick={send}>Add Question</button>
      <p>{returnedData}</p>
    </div>
  );
}

export default AddQuestion;
