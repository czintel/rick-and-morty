import './Card.css'

export default function Card({ image, name, species, origin }) {
  return (
    <section className="Card">
      <img className="Card__Image" src={image} alt="" />
      <h2 className="Card__Name">{name}</h2>
      <p className="Card__Bio">
        {name} is a {species} from {origin.name}
      </p>
    </section>
  )
}
