import { Route, Routes } from "react-router-dom";
import AddQuestion from "./components/AddQuestion";
import SignIn from "./components/SignIn";
import { useState } from "react";
import Header from "./layouts/Header";
import QuestionsPage from "./pages/QuestionsPage";
import ExamsPage from "./pages/ExamsPage";
import AddExam from "./pages/AddExam";
import EditQuestion from "./components/EditQuestion";
import EditQuestions from "./components/EditQuestions";
import EditDetails from "./components/EditDetails";
import StudentExam from "./pages/StudentExam";



  //TODO! that 
            /**
             * then student exam, then check the word
             */



function App() {
  const [auth, setAuth] = useState<boolean>(true); //TODO! replace to false when finish!!
  const [name, setName] = useState<string>("");
  return (
    <div>
      <Header username={name} />
      <Routes>
        <Route path="/" element />
        <Route
          path="/signIn"
          element={<SignIn login={setAuth} setUsername={setName} />}
        />
        <Route
          path="/questions"
          element={
            auth ? (
              <QuestionsPage />
            ) : (
              <SignIn login={setAuth} setUsername={setName} />
            )
          }
        />
        <Route
          path="/questions/add"
          element={
            auth ? (
              <AddQuestion />
            ) : (
              <SignIn login={setAuth} setUsername={setName} />
            )
          }
        />
        <Route path={`/questions/edit/:id`} element={<EditQuestion />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/exams/add" element={<AddExam />} />
        <Route path="/exams/editDetails/:id" element={<EditDetails />} />
        <Route path="/exams/editQuestions/:id" element={<EditQuestions />} />
        <Route path="/student/:examId" element={<StudentExam />} />
      </Routes>
    </div>
  );
}

export default App;
