import { NavLink } from "react-router-dom"

export default () => {
    return (
        <div className="min-h-screen bg-slate-800 text-white text-center">
            <header className='p-6'>
                <h1 className='text-2xl font-bold uppercase'>Japanese Quizzes</h1>
            </header>
            <div className='p-6 md:flex flex-wrap justify-around'>
                <div className="md:w-1/3">
                    <NavLink to="/hiragana">
                        <h1 className='text-2xl font-bold uppercase'>Hiragana</h1>
                        <div className='text-9xl'>あ</div>
                    </NavLink>
                </div>
                <div className="md:w-1/3">
                    <NavLink to="/katakana">
                        <h1 className='text-2xl font-bold uppercase'>Katakana</h1>
                        <div className='text-9xl'>ア</div>
                    </NavLink>
                </div>
                <div className="md:w-1/3 mb-8">
                    <NavLink to="/kanji">
                        <h1 className='text-2xl font-bold uppercase'>Kanji</h1>
                        <div className='text-9xl'>字</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
