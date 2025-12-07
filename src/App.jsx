import { useState } from 'react'
import './App.css'
import Question from './components/Question'
import Score from './components/Score'
import Header from './components/Header'
import Footer from './components/Footer'

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },
  {
    question: "Which method do you use to render elements to the DOM in React 18+?",
    options: ["ReactDOM.render", "createRoot().render", "React.render", "renderRoot"],
    answer: "createRoot().render"
  },
  {
    question: "What prop type is recommended to validate component props in this tutorial?",
    options: ["typescript", "prop-types", "flow", "none"],
    answer: "prop-types"
  },
  {
    question: "Which attribute tells Vite where to start the app in `index.html`?",
    options: ["<body>", "<div id=\"app\">", "<script>", "<meta>"],
    answer: "<div id=\"app\">"
  },
  {
    question: "Which package is commonly used to deploy a site to GitHub Pages from a create-react-app/Vite project?",
    options: ["now", "vercel", "gh-pages", "netlify"],
    answer: "gh-pages"
  },
  {
    question: "What is the correct way to prevent a button while no option is selected?",
    options: ["disabled prop", "style display", "remove button", "useEffect"],
    answer: "disabled prop"
  },
  {
    question: "Which hook would you use for complex state transitions?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    answer: "useReducer"
  },
  {
    question: "How many main React concepts are represented in this quiz app?",
    options: ["1", "2", "3", "4"],
    answer: "3"
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1)
    }

    setSelectedOption('')

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption('')
  }

  return (
    <div className="quiz-app">
      <Header />
      <main>
        {showScore ? (
          <Score score={score} totalQuestions={quizQuestions.length} handleRestartQuiz={handleRestartQuiz} />
        ) : (
          <Question
            questionData={quizQuestions[currentQuestion]}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            handleNextQuestion={handleNextQuestion}
            currentQuestion={currentQuestion}
            totalQuestions={quizQuestions.length}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
