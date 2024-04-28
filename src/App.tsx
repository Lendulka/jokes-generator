import './App.scss'
import { Form } from './components/Form/Form'
import { Joke } from './components/Joke/Joke'
import { FormDataStructure } from './components/Form/Form'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { useState } from "react"

interface JokesDataStructure {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

function App() {

  const [userName, setUserName] = useState<string>("")
  const [jokesData, setJokesData] = useState<JokesDataStructure[]>([])

  const fetchData = async (type: string, count: number): Promise<void> => {
    const resp = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
    const data = await resp.json()
    setJokesData(data.slice(0, count))
    console.log(data)
  }

  const handleSendData = (data: FormDataStructure) => {
    setUserName(data.name)
    fetchData(data.type, data.count)
  }

  return (
    <div className="app">
      {jokesData.length > 0 ? (
        <div className="app__container">
          <h2>{userName}</h2>
          <h3>There are jokes for you!</h3>
          {jokesData.map((item) => <Joke key={item.id} setup={item.setup} punchline={item.punchline} showRating={true} />)}
          <span className='app__container__back-icon' onClick={() => setJokesData([])}><ArrowUturnLeftIcon /></span>
        </div>
      ) : (
        <div className="app__container">
          <h2>Welcome to jokes generator</h2>
          <h3>Please fill the form:</h3>
          <Form onSubmitData={handleSendData} />
        </div>
      )}
    </div>
  )
}

export default App
