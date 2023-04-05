import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Questions from './components/Questions/Questions';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Hero></Hero>
      <Questions></Questions>
    </div>
  )
}

export default App
