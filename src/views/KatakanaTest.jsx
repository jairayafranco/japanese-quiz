import { Katakana } from '../data/Katakana'
import Quiz from '../components/Quiz'

export default () => {
    return (
        <Quiz 
            data={Katakana()} 
            title="Katakana Quiz" 
            storageKeyPrefix="Katakana" 
            characterKey="katakana" 
        />
    )
}