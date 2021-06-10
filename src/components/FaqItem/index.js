// Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  // eslint-disable-next-line
  state = {isClicked: false}

  onAdd = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    let text = 'pus'
    let imgUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const {isClicked} = this.state
    const {data} = this.props
    if (isClicked === true) {
      imgUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      text = 'minus'
    }
    return (
      <div className="box">
        <div className="box1">
          <h1 className="question">{data.questionText}</h1>
          <img
            className="symbol"
            src={imgUrl}
            onClick={this.onAdd}
            alt={text}
          />
        </div>
        {isClicked && (
          <div>
            <hr className="break" />
            <p className="text">{data.answerText}</p>
          </div>
        )}
      </div>
    )
  }
}
export default FaqItem
