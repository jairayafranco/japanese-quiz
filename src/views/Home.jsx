import { NavLink } from "react-router-dom"

export default () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <header className='mb-12 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg'>
                    Japanese Quizzes
                </h1>
                <p className="text-slate-400 mt-4 text-lg">Master your characters</p>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl'>
                <div className="group">
                    <NavLink to="/hiragana" className="block h-full">
                        <div className="bg-surface p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform group-hover:-translate-y-2 border border-slate-700 group-hover:border-primary/50 h-full flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <h1 className='text-2xl font-bold uppercase mb-4 text-primary relative z-10'>Hiragana</h1>
                            <div className='text-8xl font-bold text-slate-200 group-hover:text-white transition-colors relative z-10'>あ</div>
                            <div className="mt-6 text-sm text-slate-400 group-hover:text-primary transition-colors relative z-10">Start Quiz &rarr;</div>
                        </div>
                    </NavLink>
                </div>
                <div className="group">
                    <NavLink to="/katakana" className="block h-full">
                        <div className="bg-surface p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 transform group-hover:-translate-y-2 border border-slate-700 group-hover:border-secondary/50 h-full flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <h1 className='text-2xl font-bold uppercase mb-4 text-secondary relative z-10'>Katakana</h1>
                            <div className='text-8xl font-bold text-slate-200 group-hover:text-white transition-colors relative z-10'>ア</div>
                            <div className="mt-6 text-sm text-slate-400 group-hover:text-secondary transition-colors relative z-10">Start Quiz &rarr;</div>
                        </div>
                    </NavLink>
                </div>
                <div className="group">
                    <NavLink to="/kanji" className="block h-full">
                        <div className="bg-surface p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform group-hover:-translate-y-2 border border-slate-700 group-hover:border-accent/50 h-full flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <h1 className='text-2xl font-bold uppercase mb-4 text-accent relative z-10'>Kanji</h1>
                            <div className='text-8xl font-bold text-slate-200 group-hover:text-white transition-colors relative z-10'>字</div>
                            <div className="mt-6 text-sm text-slate-400 group-hover:text-accent transition-colors relative z-10">Start Quiz &rarr;</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
