// 1. TodoAPP the parent or root component. this holds two direct child components.
import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';
import TodosLogic from './components/TodosLogic';
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(0)
  const [itemProp, setItemProp] = useState({
    title: 'this is a test within app.jsx module',
  });

  return (
    <>
    <Header />
      <TodosLogic itemProp={itemProp} />
    </>
  )
}

export default App
