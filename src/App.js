import Characters from "./components/Characters"
import { useState, useEffect } from "react"
import "./App.css"

function App() {

  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  })

  return (
    <div className="App">
      <div>
        <h1>Meus personagens</h1>
        <Characters characterList={characterList} />
      </div>
    </div>
  )
}

export default App