import { Routes, Route } from 'react-router-dom'

import Home from "../views/Home"
import HiraganaTest from "../views/HiraganaTest"
import KatakanaTest from '../views/KatakanaTest'
import KanjiTest from '../views/KanjiTest'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/hiragana" element={<HiraganaTest />} />
                <Route path="/katakana" element={<KatakanaTest />} />
                <Route path="/kanji" element={<KanjiTest />} />
            </Routes>
        </div>
    )
}
