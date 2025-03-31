import 'bootstrap/dist/css/bootstrap.min.css';
import { Question } from './QAModels.mjs';
import NavHeader from './NavHeader';
import QuestionDescription from './QuestionDescription';
import Answers from './Answers';

const fakeQuestion = new Question(1, "Is JavaScript better than Python=", "luigi.derussis@polito.it", 1, "2024-02-28");
fakeQuestion.init();
const fakeAnswers = fakeQuestion.getAnswers();

function App() {
  return (
    <>
      <NavHeader numQuestion={fakeQuestion.id} />
      <QuestionDescription question ={fakeQuestion} />
      <Answers answers={fakeAnswers} />
    </>
  )
}

export default App
