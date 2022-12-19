import {Component} from 'react'

import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onClickBtnIcon = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  getAnswerText = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    return isActive ? answerText : null
  }

  getAltText = () => {
    const {isActive} = this.state

    return isActive ? 'minus' : 'plus'
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const btnIconUrl = isActive ? minusIcon : plusIcon
    const answer = this.getAnswerText()
    return (
      <li className="card-container">
        <div>
          <h1 className="questions">{questionText}</h1>
          <hr className="seperator" />
          <p className="answer">{answer}</p>
        </div>
        <button className="button" type="button" onClick={this.onClickBtnIcon}>
          <img src={btnIconUrl} className="btn-icon" alt={this.getAltText()} />
        </button>
      </li>
    )
  }
}

export default FaqItem
