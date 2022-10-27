import { useState } from 'react'
import './App.css'

const App = () => {
  const [toDos, setToDos] = useState([{
    id: 1,
    name: 'initial'
  }])

  const [text, setText] = useState('')

  const handleClick = () => {
    setToDos([...toDos, { id: toDos.length + 1, name: text }])
    setText('')
  }

  return (
    <div>
      <div className='top'>
        <input type="text" onChange={(event) => {
          setText(event.target.value)
        }} value={text} />

        <button onClick={handleClick}>Add</button>
      </div>

      <h1 className='middle'>Todo List</h1>
      
      <div className='container-style'>
        {toDos.map((toDo) => {
          return (
            <div className='square-style' key={toDo.id}>{toDo.name}</div>
          )
        })}
      </div>
    </div>
  )
}

export default App