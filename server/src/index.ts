import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import openingRouter from './routes/opening';
// import adminRouter from './routes/admin';
import loginRouter from './routes/login';
import questionsRouter from './routes/questions';
import examsRouter from './routes/exams';
import studentExamsRouter from './routes/studentExams';
import utilsRouter from './routes/utils';

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

// server.use('/', openingRouter);
// server.use('/admin', adminRouter);
server.use('/login', loginRouter);
server.use('/questions', questionsRouter);
server.use('/exams', examsRouter);
server.use('/studentExams', studentExamsRouter);
server.use('/utils', utilsRouter);


server.get('*', (req, res) => {
    res.sendStatus(404);//.send('Not Found');
})


server.listen(process.env.PORT, () => {
    console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});
