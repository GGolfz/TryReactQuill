import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <div>
      <ReactQuill theme="snow" value={text} onChange={setText}  />
      </div>
      <div>
        This is html render text from quill: {text}
      </div>
    </div>
  )
}

export default App
