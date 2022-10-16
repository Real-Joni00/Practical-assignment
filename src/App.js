import './App.css';
import Dictionary from './components/dictionary'
import { useState } from 'react';

function App() {
  const [preWord, setPreWord] = useState('')
  const [word, setWord] = useState('')

  return (
    <div>
      <h3>Urban dictionary definition generator</h3>
      <input value = {preWord} onChange = {e => setPreWord(e.target.value)}></input>
      <button type='button' onClick={() => setWord(preWord)}>Get Definition</button>
      <Dictionary word={word}/>
    </div>
  )
}

export default App;
