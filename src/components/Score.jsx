import PropTypes from 'prop-types'

const Score = ({ score, totalQuestions, handleRestartQuiz }) => (
  <div className="score-section">
    <h2>Your Score: {score}/{totalQuestions}</h2>
    <button onClick={handleRestartQuiz}>Restart Quiz</button>
  </div>
)

Score.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  handleRestartQuiz: PropTypes.func.isRequired
}

export default Score
