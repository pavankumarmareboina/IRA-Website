import React from 'react'
import './AboutCards.css'
// import Image from '../../../../assets/FooterCardsimg.png'

const AboutCards = ({title, para, Image}) => {
  return (
    <div id='AboutCardsContainer'>
      <div className="AboutCardsContainerLeft">
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
      <div className="AboutCardsContainerRight">
        <img  src={Image} alt={`${Image}`} />
      </div>
    </div>
  )
}

export default AboutCards
