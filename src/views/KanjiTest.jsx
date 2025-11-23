import { Kanji } from '../data/Kanji'
import Quiz from '../components/Quiz'

export default function KanjiTest() {
    return (
        <Quiz
            data={Kanji()}
            title="Kanji Quiz"
            storageKeyPrefix="Kanji"
            characterKey="kanji"
        />
    )
}
