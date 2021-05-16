import './Card.css'
import bma from './assets/images/bookmark-active.png'
import bmi from './assets/images/bookmark-inactive.png'

import { useState } from 'react'

export default function Card({ image, name, species, origin }) {
  const [isActive, setIsActive] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  console.log(bmi)

  return (
    <section className="Card">
      <img
        className="Card__Bookmark"
        src={isBookmarked ? bma : bmi}
        alt=""
        onClick={() => setIsBookmarked(!isBookmarked)}
      />
      <img className="Card__Image" src={image} alt="" />
      <h2 className="Card__Name">{name}</h2>
      <button className="Card__Button" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Hide!' : 'More Info!'}
      </button>
      {isActive && (
        <p className="Card__Bio">
          {name} is a {species} from {origin.name}
        </p>
      )}
    </section>
  )
}
