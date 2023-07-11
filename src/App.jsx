// 1. TodoAPP the parent or root component. this holds two direct child components.
import './App.css'
import TodosLogic from './components/TodosLogic';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>
      <TodosLogic/>
    </>
  )
}

export default App
