import { NavLink } from 'react-router-dom';
import style from './Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import CardsMap from '../CardsMap/CardsMap'
const api = axios.get("https://rickandmortyapi.com/api/character")


export default function Home() {

     const [characters, setCharacters] = useState([]);
     const [search, setSearch] = useState([]);
     const [filters, setFilters] = useState([]);

     useEffect(() => {
          let char = getCharacters();

          char.then(r => {
               setSearch(r)
               setCharacters(r)
               setFilters(r)

          });
     }, []);


     function handleInputChange(event) {
          const value = event.target.value; 
          const filter = characters.filter(character => { return character.name.toLowerCase().includes(value.toLowerCase()); });
          setSearch(filter);
     }

     function homemadeFilter(event){
          const value = event.target.value; 
          const filter = characters.filter(character => { return character.includes(value.toLowerCase()); });
          setFilters(filter);
     }

     async function getCharacters() {
          const api = await axios.get('https://rickandmortyapi.com/api/character');
          return api.data.results; 
     }

     return (
          <div className={style.background}>
               <nav className={style.nav}>
                    <NavLink to='/' className={style.navLink}>
                         {<p className={style.btn}>
                              <img/>
                              L
                         </p>}.

                    </NavLink>
                    <input type='text' className={style.text} onChange={handleInputChange} placeholder='Ingrese aqui su busqueda' />
                         <select name="select" className={style.select}>
                              <option  className={style.select} selected >All</option>
                              <option  className={style.select} >species</option>
                              <option  className={style.select} >status</option>
                         </select>
                    <NavLink to='#' className={style.navLink}>
                    </NavLink>
               </nav>
               <CardsMap characters={search}></CardsMap>

          </div>
     );
}