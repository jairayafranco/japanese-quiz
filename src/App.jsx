import { Routes, Route } from 'react-router-dom'

import Home from "./components/Home"
import HiraganaTest from "./components/HiraganaTest"
import KatakanaTest from './components/KatakanaTest'

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/hiragana" element={<HiraganaTest />} />
        <Route path="/katakana" element={<KatakanaTest />} />
      </Routes>
    </div>
  )
}

export default App
