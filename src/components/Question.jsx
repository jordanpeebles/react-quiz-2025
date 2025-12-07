import PropTypes from 'prop-types'
import Option from './Option'

const Question = ({ questionData, selectedOption, handleOptionChange, handleNextQuestion, currentQuestion, totalQuestions }) => (
  <div className="question-section">
    <h2>Question {currentQuestion + 1}/{totalQuestions}</h2>
    <p>{questionData.question}</p>
    <div className="options-section">
      {questionData.options.map((option) => (
        <Option
          key={option}
          option={option}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      ))}
    </div>
    <button onClick={handleNextQuestion} disabled={!selectedOption}>
      {currentQuestion === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
    </button>
  </div>
)

Question.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired
}

export default Question
