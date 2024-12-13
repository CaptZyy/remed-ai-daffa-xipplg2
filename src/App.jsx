import './App.css'
import {requestToGroqAI} from './utilities/groq';
import { useState } from 'react';
import {Light as SyntaxHighlight} from "react-syntax-highlighter"
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("");


  const handleSubmit = async () =>{
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  }
  return (
    <main className='flex flex-col min-h-[75vh] justify-center items-center '>
      <h1 className='text-6xl font-bold text-red-800 '>Benji's AI</h1>
      <form className='flex flex-col gap-5 py-10 w-full'>
        <input 
          className=' py-2 px-5 rounded-lg text-md' 
          placeholder='Write Something!' 
          id='content'
          type='text'
        />
        <button 
        onClick={handleSubmit}
        type='button'
        className='bg-red-700 text-black rounded-lg py-2 px- '>Send</button>
      </form>
      <div className='max-w-screen-xl'>
        {data ? (
          <SyntaxHighlight className='max-w-ful overflow-auto whitespace-pre-wrap break-words' style={darcula} wrapLines={true}>
            {data}
          </SyntaxHighlight>
        ): null }

      </div>
    </main>
  )
}

export default App
