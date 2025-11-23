import { Hiragana } from '../data/Hiragana'
import Quiz from '../components/Quiz'

export default () => {
  return (
    <Quiz 
      data={Hiragana()} 
      title="Hiragana Quiz" 
      storageKeyPrefix="Hiragana" 
      characterKey="hiragana" 
    />
  )
}