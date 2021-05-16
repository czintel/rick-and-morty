import './Header.css'
import logo from './assets/images/logo.png'

export default function Header() {
  return (
    <section className="Header">
      <img src={logo} alt="rick and morty logo" className="Header__Image" />
      <h1 className="Header__Heading">Character Data Base</h1>
    </section>
  )
}
