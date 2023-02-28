import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import loginRouter from './routes/login';
import questionsRouter from './routes/questions';
import examsRouter from './routes/exams';
import studentExamsRouter from './routes/studentExams';
import utilsRouter from './routes/utils';
import studentsRouter from './routes/students';


dotenv.config();

const server = express();
const port = process.env.PORT ?? 3000;

server.use(express.json());
server.use(cors());

server.use('/login', loginRouter);
server.use('/questions', questionsRouter);
server.use('/exams', examsRouter);
server.use('/students', studentsRouter);
server.use('/studentExams', studentExamsRouter);
server.use('/utils', utilsRouter);


server.get('*', (req, res) => {
    res.sendStatus(404);
})


server.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
