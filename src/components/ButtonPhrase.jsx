import getRandomfromArray from "../utils/getRandomFromArray"
import phrases from '../utils/phrases.json'
import './styles/ButtonPhrase.css'

const ButtonPhrase = ({ setPhraseRandom }) => {
  
    const handleClick = () => {
       const phrase = getRandomfromArray(phrases)
        setPhraseRandom(phrase)
    }
 
    return (
    <button className="card__button" onClick={handleClick}>Prueba tu suerte</button>
  )
}

export default ButtonPhrase