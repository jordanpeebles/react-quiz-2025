import PropTypes from 'prop-types'

const Option = ({ option, selectedOption, handleOptionChange }) => (
    <label>
      <input
        type="radio"
        name="option"
        value={option}
        checked={selectedOption === option}
        onChange={handleOptionChange}
      />
      {option}
    </label>
)

Option.propTypes = {
  option: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired
}

export default Option
