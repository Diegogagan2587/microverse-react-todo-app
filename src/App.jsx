import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';

function App() {
  const [count, setCount] = useState(0)
  const [itemProp, setItemProp] = useState({
    title: 'this is a test',
  });

  return (
    <>
      <h1>To-do's</h1>
      <p>input field will be here</p>
      <TodoItem itemProp={itemProp} />
    </>
  )
}

export default App
