import './App.css'
import Card from './Card'
import React, { useEffect, useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])
  const url = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [])

  console.log(characters)

  return (
    <>
      <header></header>
      <div className="App">
        {characters.map(character => {
          const { id, image, name, species, origin } = character
          return (
            <Card
              key={id}
              image={image}
              name={name}
              species={species}
              origin={origin}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
