import { NavLink } from "react-router-dom";

export default function KanjiTest() {
    return (
        <div className="min-h-screen bg-slate-800 text-white text-center">
            <NavLink to='/'>
                <h1 className='text-2md pl-2 pt-2 font-bold uppercase text-left'>Return</h1>
            </NavLink>
            <header className='p-6 mb-8'>
                <h1 className='text-2xl font-bold uppercase'>Kanji Quiz</h1>
                <div>
                    <p>0 / 0</p>
                </div>
            </header>

            <h1 className="text-3xl font-bold">Working on it...</h1>

            {/* <div className='text-9xl fon-bold mb-8'>
            </div>

            <div className='mb-8'>
                <form>
                    <input
                        type='text'
                        className='block w-28 mx-auto pb-2 bg-transparent border-b-2 border-b-white outline-none text-center text-6xl'
                        autoFocus
                    />
                </form>

                {error && <p className='text-red-500 text-2xl mt-5'>{error}</p>}
            </div> */}
        </div>
    );
}
