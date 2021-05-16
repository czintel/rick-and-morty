import './Card.css'
import { useState } from 'react'

export default function Card({ image, name, species, origin }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <section className="Card">
      <img className="Card__Image" src={image} alt="" />
      <h2 className="Card__Name">{name}</h2>
      <button className="Card__Button" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Hide Info' : 'More Info!'}
      </button>
      {isActive && (
        <p className="Card__Bio">
          {name} is a {species} from {origin.name}
        </p>
      )}
    </section>
  )
}
