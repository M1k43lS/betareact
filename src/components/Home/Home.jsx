import { NavLink } from 'react-router-dom';
import style from './Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import CardsMap from '../CardsMap/CardsMap'
const api = axios.get("https://rickandmortyapi.com/api/character")


export default function Home() {

     const [characters, setCharacters] = useState([]);
     const [search, setSearch] = useState([]);

     useEffect(() => {
          let char = getCharacters();

          char.then(r => {
               setSearch(r)
               setCharacters(r)

          });
     }, []);


     function handleInputChange(event) {
          // console.log(event.target.value);
          const value = event.target.value;
          // sino f
          const filter = characters.filter(character => { return character.name.toLowerCase().includes(value.toLowerCase()); });
          // console.log(filter);
          setSearch(filter);
     }

     async function getCharacters() {
          const api = await axios.get('https://rickandmortyapi.com/api/character');
          return api.data.results; //devuelve una promesa asincrona
     }

     return (
          <div className={style.background}>
               <nav className={style.nav}>
                    <NavLink to='/' className={style.navLink}>
                         <p className={style.btn}>
                              Landing
                         </p>
                    </NavLink>
                    <input type='text' className={style.text} onChange={handleInputChange} />
                    <NavLink to='#' className={style.navLink}>
                    </NavLink>
               </nav>
               <CardsMap characters={search}></CardsMap>

          </div>
     );
}