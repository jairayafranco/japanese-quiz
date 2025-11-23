import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Quiz({ data, title, storageKeyPrefix, characterKey }) {
    const [items, setItems] = useState([])
    const [input, setInput] = useState('')
    const [current, setCurrent] = useState(0)
    const [streak, setStreak] = useState(0)
    const [topStreak, setTopStreak] = useState(0)
    const [error, setError] = useState(false)

    const randomItem = () => {
        if (items.length === 0) return
        const random = Math.floor(Math.random() * items.length)
        setCurrent(random)
    }

    const getInputData = e => setInput(e.target.value)

    const checkAnswer = (e) => {
        e.preventDefault()

        const isCorrect = Array.isArray(items[current].romaji)
            ? items[current].romaji.includes(input.toLowerCase())
            : input.toLowerCase() === items[current].romaji

        if (isCorrect) {
            const newStreak = streak + 1
            setStreak(newStreak)
            setTopStreak(Math.max(newStreak, topStreak))
            setError(false)

            localStorage.setItem(
                `${storageKeyPrefix}TopStreak`,
                Math.max(newStreak, topStreak)
            )
            localStorage.setItem(
                `${storageKeyPrefix}Streak`,
                newStreak
            )
        } else {
            setStreak(0)
            const correctAnswer = Array.isArray(items[current].romaji)
                ? items[current].romaji.join(', ')
                : items[current].romaji
            setError(`Wrong! The correct answer for ${items[current][characterKey]} is ${correctAnswer}`)

            localStorage.setItem(
                `${storageKeyPrefix}Streak`,
                0
            )
        }

        setInput('')
        // We need to call randomItem after state update or just rely on the fact that items didn't change.
        // However, since randomItem depends on items state which is set in useEffect, 
        // and we are inside an event handler, items should be available.
        // But we need to make sure we pick a new random item.
        // The original code called randomHiragana() which used hiragana state.
        // Here we can just duplicate the logic or use a useEffect dependency if we wanted to be fancy, 
        // but keeping it simple like original is better.
        const random = Math.floor(Math.random() * items.length)
        setCurrent(random)
    }

    useEffect(() => {
        setItems(data)
        setStreak(
            parseInt(
                localStorage.getItem(`${storageKeyPrefix}Streak`) || 0
            )
        )
        setTopStreak(
            parseInt(
                localStorage.getItem(`${storageKeyPrefix}TopStreak`) || 0
            )
        )
    }, [data, storageKeyPrefix])

    useEffect(() => {
        if (items.length > 0) {
            randomItem()
        }
    }, [items])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent`}></div>

            <div className="w-full max-w-2xl">
                <div className="mb-8 flex justify-between items-center">
                    <NavLink to='/' className="group flex items-center text-slate-400 hover:text-white transition-colors">
                        <span className="text-2xl mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span className="text-sm font-semibold uppercase tracking-wider">Return</span>
                    </NavLink>
                    <div className="bg-surface px-4 py-2 rounded-full border border-slate-700 shadow-sm">
                        <span className="text-slate-400 text-sm mr-2">Streak:</span>
                        <span className="text-primary font-bold">{streak}</span>
                        <span className="text-slate-600 mx-2">|</span>
                        <span className="text-slate-400 text-sm mr-2">Best:</span>
                        <span className="text-secondary font-bold">{topStreak}</span>
                    </div>
                </div>

                <div className="bg-surface rounded-3xl shadow-2xl border border-slate-700 p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Status Indicator Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 transition-colors duration-300 ${error ? 'bg-accent' : 'bg-primary'}`}></div>

                    <header className='mb-8'>
                        <h1 className='text-xl font-bold uppercase tracking-widest text-slate-400'>{title}</h1>
                    </header>

                    <div className='mb-12'>
                        <div className='text-9xl font-bold text-white mb-4 drop-shadow-md'>
                            {items[current] ? items[current][characterKey] : ''}
                        </div>
                        <p className="text-slate-500 text-sm">What is this character?</p>
                    </div>

                    <div className='relative max-w-xs mx-auto'>
                        <form onSubmit={checkAnswer}>
                            <input
                                type='text'
                                value={input}
                                onChange={getInputData}
                                className={`block w-full bg-slate-900/50 border-2 rounded-xl px-4 py-3 text-center text-3xl font-bold outline-none transition-all duration-300 placeholder-slate-700
                                    ${error
                                        ? 'border-accent text-accent focus:shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                                        : 'border-slate-600 text-white focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                                    }`}
                                placeholder="?"
                                autoFocus
                            />
                        </form>
                        {error && (
                            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-xl animate-bounce-short">
                                <p className='text-accent font-medium'>{error}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
