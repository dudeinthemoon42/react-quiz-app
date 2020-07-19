import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard'
import { fetchQuizQuestions, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {

  // declare all of the states we will have for this application
  const [loading, setLoading] = useState(false); // this state is for when app is loading
  const [questions, setQuestions] = useState([]); // this state is for the questions the app has - starts as empty array. setQuestions will update all items in array
  const [number, setNumber] = useState(0); // this state represents the question number the user is currently on
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {

  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading questions...</p>
{/*       <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer} //give checkAnswer() func as the callback
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
