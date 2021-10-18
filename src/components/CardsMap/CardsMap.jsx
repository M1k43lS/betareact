import {NavLink} from 'react-router-dom';
import style from './CardsMap.module.css';
import Card from '../Card/Card';

function CardsMap ({characters}){
    
    return (
            <div className={style.cards}>
                     {characters.map(character=> {
                         return <Card name={character.name} status={character.status} species={character.species} image={character.image}/>
                     })}              
            </div>
          )
}


export default CardsMap;
