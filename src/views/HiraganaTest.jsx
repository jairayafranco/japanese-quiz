import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Hiragana } from '../data/Hiragana'

export default () => {
  const [hiragana, setHiragana] = useState([])

  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [streak, setStreak] = useState(0)
  const [topStreak, setTopStreak] = useState(0)

  const [error, setError] = useState(false)

  const randomHiragana = () => {
    const random = Math.floor(Math.random() * hiragana.length)
    setCurrent(random)
  }

  const getInputData = e => setInput(e.target.value)

  const checkAnswer = (e) => {
    e.preventDefault()

    if (input.toLowerCase() === hiragana[current].romaji) {
      setStreak(streak + 1)
      setTopStreak(Math.max(streak + 1, topStreak))
      setError(false)

      localStorage.setItem('HiraganaTopStreak', Math.max(streak, topStreak))
      localStorage.setItem('HiraganaStreak', streak + 1)
    } else {
      setStreak(0)
      setError(`Wrong! The correct answer for ${hiragana[current].hiragana} is ${hiragana[current].romaji}`)

      localStorage.setItem('HiraganaStreak', 0)
    }

    setInput('')
    randomHiragana()
  }

  useEffect(() => {
    setHiragana(Hiragana());

    randomHiragana()
    setStreak(parseInt(localStorage.getItem('HiraganaStreak') || 0))
    setTopStreak(parseInt(localStorage.getItem('HiraganaTopStreak') || 0))
  }, [])

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <NavLink to='/'>
        <h1 className='text-2md pl-2 pt-2 font-bold uppercase text-left'>Return</h1>
      </NavLink>
      <header className='p-6 mb-8'>
        <h1 className='text-2xl font-bold uppercase'>Hiragana Quiz</h1>
        <div>
          <p>{streak} / {topStreak}</p>
        </div>
      </header>

      <div className='text-9xl fon-bold mb-8'>
        {hiragana[current] ? hiragana[current].hiragana : ''}
      </div>

      <div className='mb-8'>
        <form onSubmit={checkAnswer}>
          <input
            type='text'
            value={input}
            onChange={getInputData}
            className='block w-28 mx-auto pb-2 bg-transparent border-b-2 border-b-white outline-none text-center text-6xl'
            autoFocus
          />
        </form>

        {error && <p className='text-red-500 text-2xl mt-5'>{error}</p>}
      </div>
    </div>
  )
}