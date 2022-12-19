import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="faq-card-container">
        <h1 className="main-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachItem => (
            <FaqItem faqDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
