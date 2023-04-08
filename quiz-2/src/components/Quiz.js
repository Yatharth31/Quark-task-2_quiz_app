import { useState ,useEffect} from 'react'
import { quiz } from './data'
import './quiz.css'

const Quiz = () => {
const [studentName, setStudentName] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [timeLeft, setTimeLeft] = useState(30);
  const [skipped, setSkipped] = useState(0);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
      setTimeLeft(30)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }
  const onClickSkip  = () => {
    setSelectedAnswerIndex(null)
    setSkipped(parseInt(skipped+1))
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
      setTimeLeft(30)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }
  useEffect(() => {
    if (!showResult && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
            setTimeLeft(30)
          } else {
            setActiveQuestion(0)
            setShowResult(true)
          }
      }
  }, [timeLeft, showResult, activeQuestion, questions.length]);
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
            <span><p>Time left: {timeLeft} seconds</p></span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
          <button
              onClick={onClickSkip}
              disabled={selectedAnswerIndex === 0 ||selectedAnswerIndex === 1||selectedAnswerIndex === 2||selectedAnswerIndex === 3||selectedAnswerIndex === 4 }>
              Skip
            </button>
          <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
          <div>
            <p>Answered questions: {result.correctAnswers+result.wrongAnswers}</p>
            <p>Skipped questions: {parseInt(skipped)}</p>
            <p>Incorrect count: {result.wrongAnswers}</p>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          <p>
            Skipped questions: {parseInt(skipped)}
            </p>
        </div>
      )}
    </div>
  )
}

export default Quiz